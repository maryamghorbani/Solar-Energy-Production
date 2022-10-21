import { Input } from "@material-tailwind/react";

export const DateInput = () => {
    return(
        <>
            <div class="flex gap-4 justify-center mb-3">
                <div className="w-72">
                    <Input label="Start date" />
                </div>
                <div className="w-72">
                    <Input label="End date" />
                </div>
            </div>
        </>
    )
}