import React from 'react'
import Form from '../Form/Form'

const Csr = () => {
  return (
                <>
                <section className="bg-white">
            <div
                className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[350px] lg:items-center"
            >
                <div className="mx-auto max-w-xl text-center">
                <h1 className="text-3xl font-extrabold sm:text-5xl">
                    Understand User Flow.
                    <strong className="font-extrabold text-indigo-500 sm:block">
                    Increase Conversion.
                    </strong>
                </h1>

                <p className="mt-4 sm:text-xl/relaxed">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                    tenetur fuga ducimus numquam ea!
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Form />

                   
                </div>
                </div>
            </div>
            </section>
            </>
  )
}

export default Csr