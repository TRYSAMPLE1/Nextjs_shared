import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import {connectToDB} from '@/utils/database'
import { User } from '@/models/User'

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId:'process.env.GOOGLE_ID',
            clientSecret:'process.env.GOOGLE_CLIENT_SECRET'
        })
    ],
    async session({session}) {
        const sessionUser = await User.findOne({email:session.user.email});
        session.user.id = sessionUser._id.toString();
        return session;
    },
    async signIn({profile}){
        try{

            await connectToDB();
            //check user already exists
            const userExists = await User.findOne({email:profile.email});
            // no old user
            if(!userExists){
                await new User({
                    email:profile.email,
                    username:profile.name.replace(" ","").toLowerCase(),
                    image:profile.image
                });
            }
            return true;

        }   catch (error){
            console.log(err);
            return false;

        }
    }
})

export { handler as GET, handler as POST}