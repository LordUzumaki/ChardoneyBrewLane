import React, {useEffect} from 'react';

const AboutPage = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
        }, []);
  return (
    <div className="bg-black min-h-screen p-8">
      <header className="text-center py-4">
        <h1 className="text-5xl font-extrabold font-Young20S text-white">About Chardoney Brew Lane</h1>
      </header>

      <main className="max-w-4xl mx-auto bg-Yellow-900 text-white p-8 rounded-lg shadow-lg">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Welcome to Chardoney Brew Lane </h2>
          <h2 className='text-3xl font-bold mb-4 item-center'>The Gatsby Coffee House</h2>
          <p className="mb-4">
            Founded in 1925, The Gatsby Coffee House is a place where history meets modern elegance. Our mission is to provide a unique coffee experience that transports you to the glamour and excitement of the Roaring 20s, all while enjoying the finest coffee crafted with passion and precision.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Our History</h2>
          <p className="mb-4">
            The Gatsby Coffee House was born out of a love for coffee and a deep appreciation for the vibrant culture of the Jazz Age. Our founders, inspired by the lavish parties and the lively spirit of the 1920s, wanted to create a space where people could come together, enjoy great coffee, and feel like they've stepped back in time.
          </p>
          <p>
            Over the years, our coffee shop has become a beloved gathering place for locals and visitors alike, known for its warm atmosphere, exceptional coffee, and commitment to quality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">What Makes Us Unique</h2>
          <p className="mb-4">
            At The Gatsby Coffee House, we believe in doing things a little differently. From our hand-selected coffee beans to our meticulously crafted beverages, everything we do is with one goal in mind: to offer our customers an unforgettable experience. Our unique blend of classic and modern flavors, combined with our attention to detail, sets us apart from the rest.
          </p>
          <p>
            Whether you're here to enjoy a quiet cup of coffee or to catch up with friends, you'll find that The Gatsby Coffee House is a place where history, flavor, and hospitality come together.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Commitment to Quality</h2>
          <p className="mb-4">
            We source our coffee beans from sustainable farms, ensuring that every cup of coffee we serve is not only delicious but also ethically produced. Our baristas are trained to brew each cup to perfection, using traditional methods that honor the rich history of coffee making.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Community Involvement</h2>
          <p>
            We are proud to be a part of the local community and are committed to giving back. Whether it's hosting local events, supporting charities, or simply being a welcoming space for everyone, The Gatsby Coffee House is more than just a place to get coffee—it's a place to connect, relax, and be inspired.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Looking Ahead</h2>
          <p>
            As we look to the future, we are excited to continue growing and evolving. From introducing new products to expanding our community involvement, we have big plans for The Gatsby Coffee House. Stay tuned for what's next!
          </p>
        </section>

        <footer className="text-center mt-12">
          <p className="text-lg">
            Visit us at 123 Jazz Avenue, New York, NY 10001, or call us at (555) 123-4567. We're open daily from 8 AM to 10 PM. We look forward to serving you!
          </p>
        </footer>
      </main>
    </div>
  );
};

export default AboutPage;
