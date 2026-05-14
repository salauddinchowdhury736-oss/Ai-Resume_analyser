import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter"

export const meta  =  () => ([
    {title:"Auth - RESUMIND"},
    {name:"description", content:"login or signup to track your resume submissions and get AI-powered feedback"}
])

const Auth = () => {
    const {isLoading,auth} = usePuterStore();
    const location = useLocation();
    const next = location.search.split("next=")[1] || "/";
    const navigate = useNavigate();
    useEffect( () => {
        if (auth.isAuthenticated) {
            navigate(next);
        }
    }, [auth.isAuthenticated,next])
  return (
   <main className="bg-[url('/public/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
        <div className="gradient-border shadow-lg">
            <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                <div>
                    <h1>Welcome</h1>
                    <h2>Login to continueyour job journey  </h2>
                </div>
                <div >
                    {isLoading? (
                        <button className="auth-button animate-pulse">Logging you In...</button>
                    ) :(
                        <>
                        {
                            auth.isAuthenticated?(
                                <button className="auth-button" onClick={auth.signOut}>
                                <p>Log Out</p>
                                </button>
                        
                            ):(
                                <button className="auth-button" onClick={auth.signIn}>
                                  <p>Log In</p>
                                </button>
                            )
                        }
                        </>
                    )}
                </div>
            </section>
        </div>
   </main>
  )
}

export default Auth
