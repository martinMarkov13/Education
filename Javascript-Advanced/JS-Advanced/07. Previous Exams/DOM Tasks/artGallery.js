class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }
  addArticle(articleModel, articleName, quantity) {
    articleModel = articleModel.toLowerCase();
    if (!this.possibleArticles.hasOwnProperty(articleModel)) {
      throw new Error("This article model is not included in this gallery!");
    }
    let article = this.listOfArticles.find((a) => a.articleName == articleName);
    if (article == undefined) {
      this.listOfArticles.push({
        articleModel,
        articleName,
        quantity,
      });
    } else {
      if (articleModel == article.articleModel) {
        article.quantity += quantity;
      }
    }
    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    let guest = this.guests.find((g) => g.guestName == guestName);
    if (guest) {
      throw new Error(`${guestName} has already been invited.`);
    } else {
      let points = 0;
      if (personality == "Vip") {
        points = 500;
      } else if (personality == "Middle") {
        points = 250;
      } else {
        points = 50;
      }
      this.guests.push({
        guestName,
        points: points,
        purchaseArticle: 0,
      });
      return `You have successfully invited ${guestName}!`;
    }
  }

  buyArticle(articleModel, articleName, guestName) {
    let article = this.listOfArticles.find((a) => a.articleName == articleName);
    if (article == undefined || article.articleModel !== articleModel) {
      throw new Error("This article is not found.");
    }
    if (article.quantity == 0) {
      return `The ${articleName} is not available.`;
    }
    let guest = this.guests.find((g) => g.guestName == guestName);
    if (guest == undefined) {
      return `This guest is not invited.`;
    } else {
      if (guest.points < this.possibleArticles[articleModel]) {
        return `You need to more points to purchase the article.`;
      } else {
        guest.points -= this.possibleArticles[articleModel];
        article.quantity--;
        guest.purchaseArticle++;
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
      }
    }
  }

  showGalleryInfo(criteria) {
    if (criteria == "article") {
      let result = "Articles information:";
      for (const article of this.listOfArticles) {
        result += `\n${article.articleModel} - ${article.articleName} - ${article.quantity}`;
      }
      return result;
    } else {
      let result = `Guests information:`;
      for (const guest of this.guests) {
        result += `\n${guest.guestName} - ${guest.purchaseArticle}`;
      }
      return result;
    }
  }
}
const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

