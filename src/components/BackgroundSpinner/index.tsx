export default function BackgroundSpinner() {

    return (
        <div className="flex absolute z-10 justify-center items-center w-[100%] h-[100%] bg-black/70">
            <img className="animate-spin" src="/spinner.svg" width={30} />
        </div>
    );
}