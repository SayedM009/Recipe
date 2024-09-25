import styles from "./Recipe.module.css";
import omeletteIMG from "../../assets/images/image-omelette.jpeg";
function Recipe() {
  return (
    <main>
      <section className={styles.recipe} title="recipe">
        <img
          src={omeletteIMG}
          alt="Omelette Picture"
          className={styles.orderIMG}
        />
        <header>
          <h1 className={`${styles.young400} ${styles.recipeType}`}>
            Simple Omelette Recipe
          </h1>
          <p className={styles.orderBrief}>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <figure className={styles.prepationTM}>
            <figcaption className={styles.outfit700}>
              Preparation time
            </figcaption>
            <ul>
              <li>
                <span>Total:</span> Approximately 10 minutes
              </li>
              <li>
                <span>Preparation:</span> 5 minutes
              </li>
              <li>
                <span>Cooking:</span> 5 minutes
              </li>
            </ul>
          </figure>
        </header>
        <section>
          <figure>
            <figcaption className={styles.heading}>Ingredients</figcaption>
            <ul>
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </figure>
          <hr />
          <figure>
            <figcaption className={styles.heading}>Instructions</figcaption>
            <ol>
              <li>
                <span>Beat the eggs: </span>In a bowl, beat the eggs with a
                pinch of salt and pepper until they are well mixed. You can add
                a tablespoon of water or milk for a fluffier texture.
              </li>
              <li>
                <span>Heat the pan: </span>
                Place a non-stick frying pan over medium heat and add butter or
                oil.
              </li>
              <li>
                <span>Cook the omelette: </span>Once the butter is melted and
                bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </li>
              <li>
                <span>Add fillings (optional): </span>
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </li>
              <li>
                <span>Fold and serve: </span>
                As the omelette continues to cook, carefully lift one edge and
                fold it over the fillings. Let it cook for another minute, then
                slide it onto a plate.
              </li>
              <li>
                <span>Enjoy: </span>
                Serve hot, with additional salt and pepper if needed.
              </li>
            </ol>
          </figure>
          <hr />
        </section>
        <footer>
          <h2 className={styles.heading}>Nutrition</h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table>
            <tr>
              <td>Calories</td>
              <td>277kcal</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>0g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>20g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>22g</td>
            </tr>
          </table>
        </footer>
      </section>
    </main>
  );
}

export default Recipe;
