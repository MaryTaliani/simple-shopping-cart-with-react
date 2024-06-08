import ShoppingCart from "./components/ShoppingCart";

const prodotti = [
  {
    id:1,
    title: "Staedtler Textsurfer Classic",
    price: 2,
    srcImage: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSCbZBceNbGIKW59VWIjgqwrLogeRajR0Z7gzKmV2KVlxVsqQSzouSVV_blYNYaN1ShQVJ-3LpiGfzSxAzYb9zFZ-hU7brDjq0qFKsFFoj2NOtNU4KvnX67"
  },
  {
    id:2,
    title: "Temperamatite Staedtler Metallo",
    price: 1.5,
    srcImage: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQLST0B3mtGAgZ_NE8jcd7xpygFXpB0KXjx_b0_a7T7zy4SbEgfy-VWp_DUrLs2HaRucnxjWshYLJeNwKGVVQht5wX2jHGGwysHj0I6VSdVIsgxVz7Hbz_EasbT"
  },
  {
    id:3,
    title: "Gomma Staedtler Mars bianca",
    price: 1.5,
    srcImage: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcStjPVRI2TP1Hu5eij54gUuYzy4Sg2kXn__kk8-2DCA8uFNzH7t0F0rAJvS-C8RHCuB5sf2txkGgIm51H5yeyeOv9WOx7OgjVz9Anvwq8EO4icmRY-hcSPY"
  },
  {
    id:4,
    title: "Staedtler Staedtler Lumocolor",
    price: 16,
    srcImage: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQiskVegCicHDQhZt-NbWRDIUjnTobC6qVTJrOKlbjRn2jIy9OUTTkl9qesIH81eeq9QJMNGpSdEIvS0z0JOYn_lHWWvQjqL492x1Tj10yDJb0l6i8Uang0"
  },
  {
    id:5,
    title: "Staedtler Lumocolor Permanent",
    price: 2,
    srcImage: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ3iJXPLtxTTIpDye_Q37qQ11jxPB8ykq0VCKWVH5dmB8xp1JksQZFgvF829SmkbOhmNcNOKH7ZbYabvpSll994C7yOsi4yCPga9nPLTWZzYFvKGTdc64F-0Q"
  },
  {
    id:6,
    title: "Staedtler Gomma a scorrimento eraser",
    price: 3.5,
    srcImage: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRD4e0WQrO5RWFzjTEKDTiv9tDL73Pvl-k-KeXpR8UIBuBDbO5kdlA2WDBoWXdn-HMKc7oyC0cqwjat_eaesiLoG8Q6DvCr2UK27uYcHAVM4fH8B-YGnMOQvUI"
  },
  {
    id:7,
    title: "Staedtler Compasso regolazione rapida",
    price: 16,
    srcImage: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQAV5Tg87wzihdjtFxUpFZS_hSGFSAJwN4FauC39YFc1I_9JYH3WxdDU-LbrOmAkC_fdOvRgz8rePlKYRYylbTih1buxiMLtPw1wIHqE6duZ6fvNdrCW7xr8Q"
  },
  {
    id:8,
    title: "Staedtler Set di geometria, 4 pezzi.",
    price: 10,
    srcImage: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSp9iWCLqAirB_aBcH3gbRydwOhzDaneL2m0NY3XyXm9aDvQNvm_wSCwW53TCxR_9Dlo9eBe2y9a36fUOQua6iseA4dqDI4xg82EMCRlekyl_uYFBmI3en5"
  },
  {
    id:9,
    title: "Staedtler Matite colorate 48 colori",
    price: 30,
    srcImage: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQddYLGFcUmRr3h09WxuEMbYZQNdimv0Wew0tp86mxiapedgTkCl7FXfS84VvK-_32BfDYe7EeGtxEkPXnqQzI5w0XEZvSXKBlwDKix-veB0TnqWeE3xgHq5A"
  }
]

function App() {

  return (
    <>
    <h1 style={{color:'white', marginLeft:'20px'}}>Shopping Cart</h1>
    <h2 style={{color:'white', marginLeft:'20px'}}>Products</h2>
      <ShoppingCart products={prodotti}/>
    </>
  )
}

export default App
