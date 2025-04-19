
"use client";
const LoginForm = () => {
    return (
        <div className="p-6 h-full w-full">
            {/* Header Title */}
            <div className="mb-12 justify-self-center">
                <div className="text-cyan-900 text-center text-5xl font-extrabold justify-self-center">
                    WELCOME!
                </div>
                <div className="mb-4 text-cyan-950 text-center text-xl font-bold justify-self-center">
                    Please sign in your account
                </div>
                <hr />
            </div>
            <div className="justify-between">
                <form>
                    <input
                        type="text"
                        id="email"
                        onChange={(e) => { }}
                        placeholder="EMAIL"
                        className="border-2 border-gray-300 w-full p-2 mt-6 placeholder-gray-400 rounded-md"
                    />

                    <input
                        type="password"
                        id="password"
                        onChange={(e) => { }}
                        placeholder="PASSWORD"
                        className="border-2 border-gray-300 w-full p-2 mt-6 placeholder-gray-400 rounded-md"
                    />

                    <button className="h-10 w-full p-2 mt-6 rounded-md bg-cyan-900 text-white font-extrabold">
                        LOGIN
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;