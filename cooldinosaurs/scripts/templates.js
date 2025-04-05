export function getFeaturedTemplate(dino) {
	return `<div class="feature-dino">
                <a href="all-dinos.html#${dino['name'].toLowerCase()}" class="">
                    <div class="feature-flex">
                        <img
                            src= ${dino['image1']}
                            alt=${dino['alt1']}
                            class="feature-img"
                        />
                        <div class="feature-text">
                            <h4>${dino['name']}</h4>
                            <p>
                                ${dino['content'][0].slice(0, 150)}...
                            </p>
                        </div>
                    </div>
                </a>
            </div>`;
}

export function allDinosaurContentTemplate(dino) {
	return `<section class="dino-section" id=${dino['name'].toLowerCase()}>
                <h3>${dino['name']}</h3>

                <div class="intro">
                    <img
                        src=${dino['image1']}
                        alt=${dino['alt1']}
                        class="dino-pics"
                    />

                    <p>
                        ${dino['content'][0]}
                    </p>
                </div>

                <p>
                    ${dino['content'][1]}

                </p>
                <p>
                    ${dino['content'][2]}
                </p>
                <p>
                    ${dino['content'][3]}
                </p>
                <div class="dino-content-flex">
                    <div>
                        <p>
                            ${dino['content'][4]}
                        </p>
                        <p>
                            ${dino['content'][5]}
                        </p>
                    </div>

                    <img
                        src=${dino['image2']}
                        alt=${dino['alt2']}
                        class="dino-pics"
                    />
                </div>

                <div class="honorable-mentions">
                    <h4>Honorable Mentions</h4>
                    <ol>
                        ${dino['honorable-mentions']
							.map((mention) => {
								return `<li>${mention}</li>`;
							})
							.join('')}
                    </ol>
                </div>

                <p>
                   ${dino['conclusion']}
                </p>

                <form class="${dino['name']}-form">
                    <div class="opinion-block">
                        <!-- Agree Radio Button -->
                        <input type="radio" id="agree-${dino['name']}" name="${
		dino['name']
	}-opinion" value="agree" required>
                        <label for="agree-${dino['name']}" class="custom-radio">
                            Agree
                            <img src="images/thumbs-up-svgrepo-com.svg" alt="Thumbs up" class="not-checked" />
                            <img src="images/thumbs-up-svgrepo-com-checked.svg" alt="Selected thumbs up" class="checked" />
                        </label>

                        <!-- Disagree Radio Button -->
                        <input type="radio" id="disagree-${
							dino['name']
						}" name="${
		dino['name']
	}-opinion" value="disagree" required>
                        <label for="disagree-${
							dino['name']
						}" class="custom-radio">
                            Disagree
                            <img src="images/thumbs-down-svgrepo-com.svg" alt="Thumbs down" class="not-checked" />
                            <img src="images/thumbs-down-svgrepo-com-checked.svg" alt="Selected thumbs down" class="checked" />
                        </label>
                    </div>
                    <button class="submit-button">
                        Submit Opinion
                    </button>
                </form>
            </section>`;
}
