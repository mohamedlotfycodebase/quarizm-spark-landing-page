
const Testimonials = () => {
  const testimonials = [
    {
      image: "/lovable-uploads/14dcced7-c8fd-4410-ab40-e83d5abd793f.png",
      alt: "آراء العملاء - محادثة 1"
    },
    {
      image: "/lovable-uploads/68668fca-fd14-4d3e-a353-dd75af8eb427.png",
      alt: "آراء العملاء - محادثة 2"
    },
    {
      image: "/lovable-uploads/12c502d0-c2b8-404c-9de8-ee60ae9e37f2.png",
      alt: "آراء العملاء - محادثة 3"
    },
    {
      image: "/lovable-uploads/9a341928-a355-4b76-8daa-68834c42e8e6.png",
      alt: "آراء العملاء - محادثة 4"
    },
    {
      image: "/lovable-uploads/d1e532bf-dbc2-40b7-8661-6068677dbc5e.png",
      alt: "آراء العملاء - محادثة 5"
    },
    {
      image: "/lovable-uploads/a4166ae4-1b16-4304-89d9-f3ab2b80d9e5.png",
      alt: "آراء العملاء - محادثة 6"
    }
  ];

  return (
    <section className="py-20 px-6 relative" dir="rtl" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            آراء عملائنا
          </h2>
          <p className="text-xl text-gray-300">
            آراء عملائنا توضح لك كل شيء
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-3xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <img 
                src={testimonial.image} 
                alt={testimonial.alt}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

