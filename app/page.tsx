import Card from "@/components/card";
import { createClient } from '@/supabase/client';
import Image from "next/image";

export const revalidate = 3600;

export default async function Home() {

  const supabase = createClient();
  const { data:product,error } = await supabase.from('easysell-prdoucts').select()
 
  const { data: topProducts } = await supabase
    .from('easysell-prdoucts')
    .select()
    .is('boost', true);
  const Products = [
    {
      id: 0,
      name: "Mew Paw",
      description: " new products is available right now came check it out ",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Black_Paw.svg/1093px-Black_Paw.svg.png",
    },
    {
      id: 1,
      name: "Mew Paw",
      description: " new products is available right now came check it out ",
      imageUrl:
        "https://images.unsplash.com/photo-1682685797406-97f364419b4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Mew Paw",
      description: " new products is available right now came check it out ",
      imageUrl:
        "https://images.unsplash.com/photo-1682686580849-3e7f67df4015?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  if (!product) {
    <h1>No product</h1>
  }
  return (
    <main className="min-h-screen max-w-[100rem] mx-auto">
      <div className="px-12 pt-12 pb-20">
        <div className="flex flex-col xl:flex-row gap-2 xl:gap-40">
          <div className="pt-12">
            <h2 className="text-4xl mb-16">OUR TOP PRODUCTS</h2>
            <p className="text-xl">You can pay to boost your products here.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-12">
          {topProducts && topProducts.map((pro, index) => (
            <Card key={pro.id}  {...pro}
             

            />
      ))}
          </div>
        </div>
     
      <h2 className="text-4xl mt-20 mb-16">ALL PRODUCTS</h2>
        {product && product.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {product.map((item, idx) => (
              <Card  price={0} key={`${item.name}-${idx}`} {...item}  />
            ))}
          </div>
        ) : (
          <p className="text-xl text-gray-800">All our products are gone...</p>
        )}
   </div>
    
    </main>
  );
}
