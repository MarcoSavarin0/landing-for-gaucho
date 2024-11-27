import CardClientes from "./ui/CardClientes"

const SixthSection = () => {
  return (
    <div>
        <div className="w-full mb-16">
            <h2 className="text-white text-3xl text-center font-stolzMedium mb-3 lg:text-[40px]">Lo que dicen <span className="text-[#CEFF20]">nuestros clientes</span> de nosotros</h2>
        </div>
        <div className="flex flex-col gap-5 items-center lg:flex-row lg:items-center lg:justify-center 2xl:gap-8 w-full">
            <CardClientes text="“CloudPeak has been a game-changer for our business. Their intuitive platform and excellent customer service have allowed us to streamline our operations and focus on what matters most. Highly recommended!”" avatar="https://github.com/shadcn.png" name="Lorem Ipsum" subtitle="Lorem Ipsum" />
            <CardClientes text="“CloudPeak has been a game-changer for our business. Their intuitive platform and excellent customer service have allowed us to streamline our operations and focus on what matters most. Highly recommended!”" avatar="https://github.com/shadcn.png" name="Lorem Ipsum" subtitle="Lorem Ipsum" />
            <CardClientes text="“CloudPeak has been a game-changer for our business. Their intuitive platform and excellent customer service have allowed us to streamline our operations and focus on what matters most. Highly recommended!”" avatar="https://github.com/shadcn.png" name="Lorem Ipsum" subtitle="Lorem Ipsum" />
        </div>
    </div>
  )
}

export default SixthSection