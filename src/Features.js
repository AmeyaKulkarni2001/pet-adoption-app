import "./Features.css";
function Features() {
  return (
    <section>
      <div>
        <h2 className="feature-heading">START YOUR PET ADOPTION JOURNEY</h2>
      </div>
      <div className="section-features">
        <div>
          <h2 className="feature-subheading">SEARCH</h2>
          <p className="feature-text">
            It's easy to find a dog or cat who's right for you at a shelter or
            rescue group. Simply enter your zip code above to start your search.
          </p>
        </div>
        <div>
          <h2 className="feature-subheading">MEET</h2>
          <p className="feature-text">
            Once you find a pet, click "learn more about me" to get contact info
            for their shelter or rescue. Contact them to learn more about how to
            meet and adopt the pet.
          </p>
        </div>
        <div>
          <h2 className="feature-subheading">ADOPT</h2>
          <p className="feature-text">
            The rescue or shelter will walk you through their adoption process.
            Prepare your home for the arrival of your dog or cat to help them
            adjust to their new family.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Features;
