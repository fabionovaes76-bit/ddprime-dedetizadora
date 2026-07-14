import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a1d30] py-12 text-slate-200">
      <div className="container grid gap-8 md:grid-cols-3">
        <div>
          <Image
            src="/logo-ddprime.png"
            alt="DD Prime"
            width={160}
            height={76}
            className="h-20 w-auto rounded bg-white p-2 object-contain"
          />
          <p className="mt-4 text-sm leading-6">
            Controle profissional de pragas urbanas em Campo Grande-MS.
          </p>
        </div>
        <div>
          <h3 className="font-black text-white">Contato</h3>
          <p className="mt-4">WhatsApp: (67) 98108-6008</p>
          <p className="mt-2 break-all">ddprimededetisadora@gmail.com</p>
        </div>
        <div>
          <h3 className="font-black text-white">Endereço</h3>
          <p className="mt-4 leading-7">
            Rua Marcelino Pires, 237<br />
            Vila Ieda<br />
            Campo Grande-MS
          </p>
        </div>
      </div>
      <div className="container mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
        © 2026 DD Prime Dedetizadora. Todos os direitos reservados.
      </div>
    </footer>
  );
}
