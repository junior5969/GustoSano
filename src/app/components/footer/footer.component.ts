import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  imageSources = [
    { name: 'Solarelli', url: 'https://www.solarelli.it/prodotto-solarelli/mela-gala/' },
    { name: 'Rela Ortofrutta', url: 'https://www.relaortofrutta.it/product/mango/' },
    { name: 'Savini Vivai', url: 'https://www.savinivivai.it/it/shop/uva-spina-bianca.html' },
    { name: 'Gastronomia Vasca', url: 'https://www.gastronomiavasca.net/en/gastro/glossary/lime' },
    { name: 'Liberty Prim', url: 'https://www.libertyprim.com/it/lexique-familles/679/pomelo-lexique-des-agrume.htm' },
    { name: 'LOV', url: 'https://lov-ita.com/pere/pere-abate-fetel/' },
    { name: 'QE Food Stores', url: 'https://camperdown.qefoodstores.com.au/lines/avocado-large-each' },
    { name: 'McCormick FONA', url: 'https://www.mccormickfona.com/articles/2016/02/flavor-insight-lingonberry' },
    { name: 'Amati', url: 'https://amati.shop/prodotto.php?prodotto=passion-fruit&codiceArticolo=1105' },
    { name: 'Four Winds Growers', url: 'https://www.fourwindsgrowers.com/products/tropical-white-guava-tree?variant=39730278531131' },
    { name: 'Repubblica', url: 'https://www.repubblica.it/sapori/2020/03/09/news/emporio_prodotto_annona_calabrese-250692985/' },
    { name: 'Organic Seeds 4 You', url: 'https://www.organicseeds4you.com/cs/home/ceylon-gooseberry-seeds-dovyalis-hebecarpa.html' },
    { name: 'Kikkoman', url: 'https://www.kikkoman.com/en/culture/foodforum/japanese-style/35-2.html' },
    { name: 'Melissa’s', url: 'https://www.melissas.com/products/kiwano-horned-melon' },
    { name: 'Garden Feast', url: 'https://gardenfeast.com.au/product/actiniadia-chinensis-golden-kiwi-fruit-140mm/' },
    { name: 'SmartYield', url: 'https://smartyield.in/?s=papaya' },
    { name: 'Quill & Pad', url: 'https://quillandpad.com/2024/02/26/durian-the-king-of-fruits-absolutely-delicious-but-the-smell-is-unforgettable-and-thats-putting-it-mildly-2/' },
    { name: 'Liberty Prim', url: 'https://www.libertyprim.com/it/lexique-familles/51/fico-lexique-des-frutta.htm' },
    { name: 'QVM', url: 'https://qvm.com.au/shop/fruit-veg-organics/fruit/feijoa/' },
    { name: 'Aranyaani', url: 'https://aranyaani.in/products/jackfruit' },
    { name: 'ADFS', url: 'https://www.adfs.in/products/hazelnuts' }
  ];
}
