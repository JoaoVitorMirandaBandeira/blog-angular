interface Noticia{
    id:number,
    titulo:string,
    descricao:string,
    imagemUrl:string,
    dataPostagem:string
}

const Data: Noticia[] = [
    {
        id: 1,
        titulo: "Descoberta científica revolucionária",
        descricao: "Cientistas fazem uma descoberta incrível que promete transformar a ciência moderna.",
        imagemUrl: "https://multiversonoticias.com.br/wp-content/uploads/2023/10/planeta-9.jpeg",
        dataPostagem: "2023-12-25"
      },
      {
        id: 2,
        titulo: "Novas tecnologias no horizonte",
        descricao: "Empresas inovadoras estão desenvolvendo tecnologias de ponta que prometem mudar o futuro.",
        imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqDFG2kUXEpSDDcW1gZExqxz-HAItWbPHOzz7y8trXviH6fey30IXi_Fv-snfUZkKNTho&usqp=CAU",
        dataPostagem: "2023-12-25"
      },
      {
        id: 3,
        titulo: "Avanços na medicina",
        descricao: "Pesquisadores encontram uma nova abordagem para tratar doenças com resultados promissores.",
        imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegJfyVlpUFVVbtfibiny9LOOeCaBkxCU9UliBNmG3rZuUzrUql0Cs3Uv_VQy7Xl9R3Yk&usqp=CAU",
        dataPostagem: "2023-12-25"
      },
      {
        id: 4,
        titulo: "Exploração espacial atinge novos patamares",
        descricao: "Agências espaciais anunciam descobertas emocionantes durante missões recentes no espaço.",
        imagemUrl: "https://tecnodefesa.com.br/wp-content/uploads/2021/09/VLS.jpg",
        dataPostagem: "2023-12-25"
      }
]

export {Data, Noticia}

