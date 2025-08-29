import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Numbers } from "./Numbers";


export const Hero = () => {
    return (
    <section className="relative pt-32 lg:pt-36">
        {" "}
        <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            <div className="absolute w-full lg-:w-1/2 inset-y-0 lg:right-0">
                <span className="absolute -left-6 md:left-[500px] top-24 
                lg:top-32 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r
                from-blue-600 to-violet-600 blur-xl opacity-60 lg:opacity-95 lg:block hidden">
                    
                </span>
                <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl 
                bg-primary blur-xl opacity-80"></span>
            </div>

            <div className="relative flex flex-col items-centre text-centre lg:text-left
             lg:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 
             lg:w-1/2">
                <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl
                 xl:text-6xl font-bold">Empower Your Business 
                 <span className="text-transparent bg-clip-text bg-gradient-to-r
                  from-blue-600 to-violet-600"> with AI{" "}</span></h1>
                <Paragraph className="mt-8">
                    Our AI SaaS platform seamlessly integrates with your existing
                    workflows to deliver real‑time insights, intelligent automation, and
                    data‑driven decision-making. Experience a future where your business
                    runs smarter, faster, and more efficiently.
                </Paragraph>

                <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
                    <div className="flex sm:flex-row flex-col gap-5 w-full">
                        <form
                action="#"
                className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3
                                          shadow-lg shadow-box-shadow border border-box-border
                                          bg-box-bg rounded-full ease-linear focus-within:bg-body
                                          focus-within:border-primary"
              >
                <span className="min-w-max pr-2 border-r border-box-border">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="w-full py-3 outline-none bg-transparent"
                />
                <Button className="min-w-max text-white">
                    <span className=" sm:flex relative z-[5]">Get Started</span>
                </Button>
              </form>
                    </div>
                </div>
            </div>

            <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto
            max-w-3xl">
                <img src="https://images.pexels.com/photos/7773731/pexels-photo-7773731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  width={2350} height={2350}
                className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"/>
            </div>
        </Container>
        <Numbers />
    </section>
    );
};