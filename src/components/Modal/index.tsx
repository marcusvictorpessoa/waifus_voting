import { useModal } from "@/context/modal";

export default function Modal() {

    const { closeModal, modal } = useModal()

    return (
        <div className="flex absolute z-10 justify-center items-center w-[100%] h-[100%] bg-black/70">
            <div className="flex flex-col justify-around bg-white rounded-sm w-[250px] h-[100px]">
                <span className="text-center font-semibold">Confirmar voto em {modal.waifuName}?</span>
                <div className="flex gap-2 justify-center">
                    <button className="w-[45%] h-[40px] rounded-sm bg-green-500 text-white font-semibold" >Sim</button>
                    <button onClick={() => closeModal()} className="w-[45%] h-[40px] rounded-sm bg-red-500 text-white font-semibold">Não</button>
                </div>
            </div>
        </div>
    );
}