export const home = (req, res) => {
  res.render("home", {
    title: "Dinosaurs around the world!",
    message: "Welcome to the world of dinosaurs!",
  });
};

export const about = (req, res) => {
  res.render("about", {
    title: "About us",
    message: "We are a group of dinosaur enthusiasts",
  });
};

export const contact = (req, res) => {
  res.render("contact", {
    title: "Contact us",
    message: "Contact us at 09 233 40 89",
  });
};

export const privacy = (req, res) => {
  res.render("privacy", {
    title: "Privacy policy",
    message: "Dinosaurs are protective of their privacy",
  });
};
