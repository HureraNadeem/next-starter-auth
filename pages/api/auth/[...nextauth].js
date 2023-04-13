import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth"


export const authOptions = {
    session: {
        jwt: true
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req) {
                // credentials is what we send from the frontend
                console.log(credentials.email);
                console.log(credentials.password);


                // TODO: Find in database

                // if (not found):
                // throw Error("User Not found!")

                // if found:
                const user = { id: "12345", name: "abc", email: "abc@gmail.com" }

                // Whatever we will return will be added to JWT
                return { id: user.id, email:user.email}
            }

        })
    ],
    
}

export default NextAuth(authOptions)