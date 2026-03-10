const paragraph1 = document.createElement("p");
paragraph1.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consectetur rerum dicta quaerat itaque inventore velit ipsam et omnis ullam dolorum, a, excepturi placeat repellendus consequatur error amet modi earum minus? Perferendis in optio, sequi esse quae doloremque magni mollitia corporis aliquam eum consequatur qui architecto, unde ex eos nemo? Odit, explicabo repellendus. Dolorem at omnis nihil quia. Atque fugiat vitae itaque culpa amet quidem, eaque nesciunt illo quisquam facere tenetur id ratione harum voluptatem! Pariatur nesciunt, hic corporis laborum eum animi placeat nisi veritatis optio dignissimos quasi, minima labore repellendus delectus incidunt minus, a exercitationem fugiat officiis iste ut.";

const paragraph2 = document.createElement("p");
paragraph2.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consectetur rerum dicta quaerat itaque inventore velit ipsam et omnis ullam dolorum, a, excepturi placeat repellendus consequatur error amet modi earum minus? Perferendis in optio, sequi esse quae doloremque magni mollitia corporis aliquam eum consequatur qui architecto, unde ex eos nemo? Odit, explicabo repellendus. Dolorem at omnis nihil quia. Atque fugiat vitae itaque culpa amet quidem, eaque nesciunt illo quisquam facere tenetur id ratione harum voluptatem! Pariatur nesciunt, hic corporis laborum eum animi placeat nisi veritatis optio dignissimos quasi, minima labore repellendus delectus incidunt minus, a exercitationem fugiat officiis iste ut.";

const paragraph_section = document.querySelector(".paragraph_section");
paragraph_section.appendChild(paragraph1);
paragraph_section.appendChild(paragraph2);

const li1 = document.createElement("li");
li1.innerText = "Node JS";

const li2 = document.createElement("li");
li2.innerText = "Express JS";

const li3 = document.createElement("li");
li3.innerText = "Mongo DB";

const li4 = document.createElement("li");
li4.innerText = "Next JS";

const list_section = document.querySelector(".list_section");
list_section.appendChild(li1);
list_section.appendChild(li2);
list_section.appendChild(li3);
list_section.appendChild(li4);
