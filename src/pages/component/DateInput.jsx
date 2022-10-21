import { Input } from "@material-tailwind/react";

export const DateInput = () => {
    return(
        <>
            <div class="flex gap-2 justify-center mb-3">
                <div>
                    <label for="exampleEmail0" class="form-label inline-block mb-2 text-gray-700">
                        Start Date
                    </label>
                    <input
                    type="email"
                    class="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="exampleEmail0"
                    placeholder="Email input"
                    />
                </div>
                <div>
                    <label for="exampleEmail0" class="form-label inline-block mb-2 text-gray-700">
                        End Date
                    </label>
                    <input
                    type="email"
                    class="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="exampleEmail0"
                    placeholder="Email input"
                    />
                </div>
            </div>
        </>
    )
}