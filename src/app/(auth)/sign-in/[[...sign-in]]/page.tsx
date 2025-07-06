import { SignIn } from "@clerk/nextjs"

const SignInPage = () => {
  return <main className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    {/* <SignIn /> */}
     <div className="rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-white/10 backdrop-blur-md border border-white/20 p-10 max-w-md w-full transition-transform duration-500 hover:scale-105 items-center justify-center flex h-150 w-full">
      <SignIn />
    </div>
    </main>
}

export default SignInPage
