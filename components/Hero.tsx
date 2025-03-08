import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

function Stat({ label, value }: { label: string; value: string }) {
    return (
        <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">{value}</div>
            <div className="text-gray-600 text-sm">{label}</div>
        </div>
    );
}

const Hero = () => {
    return (
        <section className="relative py-20 md:py-32 md:pb-64">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,100,11,0.15),transparent_70%)]" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />

            <div className="max-w-5xl space-y-3 mx-auto px-2 relative">

                <div className="flex justify-center w-full items-center text-center">
                    <div className="flex flex-col gap-2 w-full">

                        <div className="space-y-10 p-4 md:py-4 relative">
                            <div className="absolute top-4 left-4 flex space-x-2">
                                <div className="w-3 h-3 bg-black/20 rounded-full" />
                                <div className="w-3 h-3 bg-black/20 rounded-full" />
                            </div>
                            <div className="absolute top-4 right-4">
                                <div className="w-3 h-3 bg-black/20 rounded-full" />
                            </div>
                            <h1 className="text-black text-2xl md:text-4xl lg:text-6xl font-bold mt-8 uppercase">
                                Advanced Blockchain
                                <span className='gradient-text mx-2'>Technology</span>

                            </h1>
                            <p className='text-normal mt-4 leading-relaxed max-w-3xl mx-auto'>
                                Quantum Blocks represents the next evolution in blockchain technology, offering a transformative
                                platform designed to revolutionize the way blockchain interacts with real-world applications.
                            </p>

                        </div>

                        <div className="flex gap-4 items-center justify-center">
                            <Button className="gradient-bg text-white">
                                BUY SOL →
                            </Button>
                            <Button className="bg-black text-white">
                                Read Whitepaper →
                            </Button>
                        </div>

                    </div>

                    {/* <div className="relative ">
                        <Image src="/block3.png" alt="Universe Chain" width={100} height={100} className="absolutex top-4x w-full animate-pulsex" />
                    </div> */}
                </div>
                {/* Stats Section */}
                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16x border-tx">
                    <Stat label="Total SOL Deposited" value="$0" />
                    <Stat label="Total SOL Yield" value="0%" />
                    <Stat label="AVSs" value="2" />
                    <Stat label="No of users" value="1" />
                </div> */}
            </div>

        </section>

    )
}

export default Hero