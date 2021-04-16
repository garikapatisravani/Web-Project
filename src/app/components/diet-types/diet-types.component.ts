import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diet-types',
  templateUrl: './diet-types.component.html',
  styleUrls: ['./diet-types.component.css']
})
export class DietTypesComponent implements OnInit {

  diets: any[] = [];

  constructor() { }

  ngOnInit(): void {

    this.diets = [{
      title : "Keogenic Diet",
      url: "../../../assets/keto.jpg",
      text: "Ketogenic is a term for a low-carb diet (like the Atkins diet). The idea is for you to get more calories from protein and fat and less from carbohydrates. You cut back most on the carbs that are easy to digest, like sugar, soda, pastries, and white bread. A ketogenic diet may help you lose more weight in the first 3 to 6 months than some other diets. This may be because it takes more calories to change fat into energy than it does to change carbs into energy. It’s also possible that a high-fat, high-protein diet satisfies you more, so you eat less, but that hasn’t been proved yet.",
      link: "https://www.healthline.com/nutrition/ketogenic-diet-101#weight-loss"
    },
    {
      title : "Atkins Diet",
      url: "../../../assets/atkins.jpg",
      text:"The Atkins diet is a low-carb diet, usually recommended for weight loss. Proponents of this diet claim that you can lose weight while eating as much protein and fat as you want, as long as you avoid foods high in carbs. In the past 12 or so years, over 20 studies have shown that low-carb diets without the need for calorie counting are effective for weight loss and can lead to various health improvements. The main reason why low-carb diets are so effective for weight loss is that a reduction in carbs and increased protein intake lead to reduced appetite, making you eat fewer calories without having to think about it.",
      link:"https://www.healthline.com/nutrition/atkins-diet-101"
    },
    {
      title : "Vegan Diet",
      url: "../../../assets/vegan.jpg",
      text: "There’s a good chance you’ll lose weight on the vegan diet. Research shows vegans tend to eat fewer calories, weigh less and have a lower body mass index (a measure of body fat) than their meat-eating counterparts. If you're doing it right – i.e., eating lots of fruits, veggies and whole grains – you'll likely feel full on fewer calories than you're allowed each day. With that calorie deficit and a little physical activity, you're bound to shed pounds. How quickly and whether you keep them off is up to you.",
      link: "https://www.healthline.com/nutrition/vegan-diet-guide"
    },
    {
      title : "Mediterranean Diet",
      url: "../../../assets/mediterranean.jfif",
      text:"The Mediterranean diet might help you lose weight. While some people fear that eating a diet like the Mediterranean diet that is relatively rich in fats (think olive oil, olives, avocado and some cheese) will keep them fat, more and more research is suggesting the opposite is true. Of course, it depends on which aspects you adopt and how it compares to your current diet. If, for instance, you build a calorie deficit into your plan – eating fewer calories than your daily recommended max or burning off extra by exercising – you should shed some pounds. How quickly and whether you keep them off is up to you.",
      link:"https://www.healthline.com/nutrition/mediterranean-diet-meal-plan"
    },
    {
      title : "Dash Diet",
      url: "../../../assets/dash.jpg",
      text: "The DASH Diet, which stands for dietary approaches to stop hypertension, is promoted by the National Heart, Lung, and Blood Institute to do exactly that: stop (or prevent) hypertension, aka high blood pressure. It emphasizes the foods you've always been told to eat (fruits, veggies, whole grains, lean protein and low-fat dairy), which are high in blood pressure-deflating nutrients like potassium, calcium, protein and fiber. DASH also discourages foods that are high in saturated fat, such as fatty meats, full-fat dairy foods and tropical oils, as well as sugar-sweetened beverages and sweets. You’ll likely lose weight on the DASH Diet, provided you follow the rules, and especially if you design your plan with a calorie deficit.",
      link:"https://www.healthline.com/nutrition/dash-diet"
    }
  ];
  }

  onLinkClick(url){
    window.open(url,"_blank")
  }

}
