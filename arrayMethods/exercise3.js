/* let people = [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Pimen",
        last: "Dreveckiy",
      },
      registered: {
        date: "2012-10-17T22:58:40.011Z",
        age: 10,
      },
      id: {
        name: "",
        value: null,
      },
      nat: "UA",
    } 
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Batur",
        last: "Orbay",
      },
      registered: {
        date: "2004-09-29T02:10:46.486Z",
        age: 18,
      },
      id: {
        name: "",
        value: null,
      },
      nat: "TR",
    },
    {
      gender: "male",
      name: {
        title: "Monsieur",
        first: "Ueli",
        last: "Garcia",
      },
      registered: {
        date: "2020-07-12T01:48:06.418Z",
        age: 2,
      },
      id: {
        name: "AVS",
        value: "756.7819.4500.36",
      },
      nat: "CH",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Carter",
        last: "Wilson",
      },
      registered: {
        date: "2005-11-26T16:30:05.354Z",
        age: 17,
      },
      id: {
        name: "",
        value: null,
      },
      nat: "NZ",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Matilda",
        last: "Haataja",
      },
      registered: {
        date: "2011-04-15T06:10:59.096Z",
        age: 11,
      },
      id: {
        name: "HETU",
        value: "NaNNA852undefined",
      },
      nat: "FI",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Valdemar",
        last: "Madsen",
      },
      registered: {
        date: "2008-08-26T11:37:22.805Z",
        age: 14,
      },
      id: {
        name: "CPR",
        value: "270485-2919",
      },
      nat: "DK",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Kitty",
        last: "Pena",
      },
      registered: {
        date: "2005-10-03T02:57:11.031Z",
        age: 17,
      },
      id: {
        name: "TFN",
        value: "276292784",
      },
      nat: "AU",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "كيان",
        last: "حیدری",
      },
      registered: {
        date: "2007-12-25T03:31:02.070Z",
        age: 15,
      },
      id: {
        name: "",
        value: null,
      },
      nat: "IR",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Rémy",
        last: "Colin",
      },
      registered: {
        date: "2007-01-29T12:04:22.955Z",
        age: 16,
      },
      id: {
        name: "INSEE",
        value: "1771006215280 18",
      },
      nat: "FR",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Uriel",
        last: "Colón",
      },
      registered: {
        date: "2014-01-24T19:45:13.008Z",
        age: 9,
      },
      id: {
        name: "NSS",
        value: "73 34 91 4974 6",
      },
      nat: "MX",
    },
  ];

let people2 = {
    mx:[
        {
            gender: "female",
            name: {
              title: "Ms",
              first: "Matilda",
              last: "Haataja",
            },
            registered: {
              date: "2011-04-15T06:10:59.096Z",
              age: 11,
            },
            id: {
              name: "HETU",
              value: "NaNNA852undefined",
            },
            nat: "FI",
          },{
            gender: "female",
            name: {
              title: "Ms",
              first: "Matilda",
              last: "Haataja",
            },
            registered: {
              date: "2011-04-15T06:10:59.096Z",
              age: 11,
            },
            id: {
              name: "HETU",
              value: "NaNNA852undefined",
            },
            nat: "FI",
          },
    ],
    fr:[
        {
            gender: "male",
            name: {
              title: "Mr",
              first: "Uriel",
              last: "Colón",
            },
            registered: {
              date: "2014-01-24T19:45:13.008Z",
              age: 9,
            },
            id: {
              name: "NSS",
              value: "73 34 91 4974 6",
            },
            nat: "MX",
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Uriel",
              last: "Colón",
            },
            registered: {
              date: "2014-01-24T19:45:13.008Z",
              age: 9,
            },
            id: {
              name: "NSS",
              value: "73 34 91 4974 6",
            },
            nat: "MX",
          },
    ]
}


const getExcellenceStudents = (studentsList, minimumAverage) => {
    let result = studentsList.filter( student => student.average >= minimumAverage)
    return result 
} */

let products = [
  {
    name: "A",
    category: "Vegetales",
    date: "09/27/2023",
  },
  {
    name: "B",
    category: "Carnes",
    date: "06/23/2023",
  },
  {
    name: "C",
    category: "Carnes",
    date: "01/01/2023",
  },
];

const calcularCaducidad = (productList) => {
  let currentDate = Date.now();
  let result = productList.map((product) => {
    let { name, date } = product;
    let productDate = new Date(date).getTime();
    let timeDiff = productDate - currentDate; /*milisegundos*/
    let timeDiffInDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return {
      name,
      tiempoRestante: timeDiffInDays > 0 ? timeDiffInDays : "Producto Caducado",
    };
  });
  return result;
};

let resultList = calcularCaducidad(products);
console.log(resultList);
