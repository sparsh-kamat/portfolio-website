//this is going to be a stepper which will have carsds in either direction  i.e left and right alternating of the the strepper showing my education and then work history.

export default function History() {
    return (
        <section className="flex items-center justify-center ">
            <div className="flex flex-col justify-center items-center py-30 lg:px-[15%] content-center">
                <div className="max-w-3xl text-center px-4 lg:px-0">
                    <h1 className="text-5xl font-serif font-bold tracking-tight leading-tight mb-9 bg-gradient-to-r from-yellow-600 via-red-600 to-green-600 bg-clip-text text-transparent animate-gradient-x">History</h1>
                    <p className="text-xl leading-7 text-muted-foreground font-serif">
                        My education and work history will be added soon!
                    </p>
                </div>
            </div>
        </section>
    );
}