import React from "react";

const NotFound = () => {
  return (
    <main className="bg-background">
      <div className="flex flex-col justify-center py-14 px-4">
        <h1 className="mb-8 text-secondary font-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
          Questa pagina non esiste e tu non dovresti essere qui.
        </h1>
        <img 
          src="/images/bike-police.webp" 
          alt="Bike Police" 
          className="w-96 lg:w-[60%] h-auto mx-auto mb-8"
        />
        <h1 className="text-secondary font-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
          Passa al <a className="text-hover-primary underline" href="/negozio">Negozio</a> per trovare una bici adatta a te e tornare sano e salvo alla <a className="text-hover-primary underline" href="/">Home</a>,<br className="hidden lg:block" /> prima che i poliziotti in bicicletta ti trovino. <br />
          E sì, il casco dovrebbero metterlo anche loro.
        </h1>
      </div>
    </main>
  );
};

export default NotFound;