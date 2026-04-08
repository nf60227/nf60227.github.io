// ============================================
// Content data for Impressionism website
// All images: Wikimedia Commons (public domain)
// ============================================

// Precomputed MD5 hash prefixes for direct upload.wikimedia.org URLs
const WIKI_HASHES = {
  "'Golden_Summer,_Eaglemont'_by_Arthur_Streeton,_1889.jpg": "5/5b",
  "Alfred_Sisley_-_Flood_at_Port-Marly_-_Google_Art_Project.jpg": "5/58",
  "Alfred_Sisley_-_Molesey_Weir,_Hampton_Court_-_Google_Art_Project.jpg": "4/4a",
  "Alfred_Sisley_-_Snow_at_Louveciennes_-_Google_Art_Project.jpg": "c/cb",
  "Alfred_Sisley_-_The_Bridge_at_Villeneuve-la-Garenne_-_Google_Art_Project.jpg": "5/51",
  "Alfred_Sisley_-_The_Terrace_at_Saint-Germain,_Spring_-_Google_Art_Project.jpg": "a/a2",
  "Alfred_Sisley_044.jpg": "9/9a",
  "Arthur_Streeton_-_'Still_glides_the_stream,_and_shall_for_ever_glide'_-_Google_Art_Project.jpg": "0/0d",
  "Arthur_Streeton_-_Fire's_on_-_Google_Art_Project.jpg": "a/ae",
  "Arthur_Streeton_-_Near_Heidelberg_-_Google_Art_Project.jpg": "e/ee",
  "Arthur_Streeton_-_The_purple_noon's_transparent_might_-_Google_Art_Project.jpg": "c/c6",
  "Auguste_Renoir_-_A_Girl_with_a_Watering_Can_-_Google_Art_Project.jpg": "3/3f",
  "Auguste_Renoir_-_La_Grenouillère_-_Google_Art_Project.jpg": "7/79",
  "Berthe_Morisot_-_In_the_Garden_at_Maurecourt.jpg": "7/77",
  "Berthe_Morisot_-_Jour_d'été_-_Musée_d'arts_de_Nantes.jpg": "0/09",
  "Berthe_Morisot_-_The_Butterfly_Hunt_-_Google_Art_Project.jpg": "0/0e",
  "Berthe_Morisot_-_The_Cradle_-_Google_Art_Project.jpg": "c/ca",
  "Berthe_Morisot_-_Woman_at_Her_Toilette_-_Google_Art_Project.jpg": "8/8a",
  "Berthe_Morisot_-_Young_Girl_by_the_Window_-_Google_Art_Project.jpg": "1/1d",
  "Camille_Pissarro_-_Avenue_de_l'Opéra_-_Sunshine,_Winter_Morning_-_Google_Art_Project.jpg": "1/14",
  "Camille_Pissarro_-_La_Côte_des_Bœufs_à_l'Hermitage_-_Google_Art_Project.jpg": "0/05",
  "Camille_Pissarro_-_La_Récolte,_Pontoise_-_Google_Art_Project.jpg": "d/de",
  "Camille_Pissarro_-_Lordship_Lane_Station_-_Google_Art_Project.jpg": "a/a5",
  "Camille_Pissarro_-_The_Boulevard_Montmartre_at_Night_-_Google_Art_Project.jpg": "8/8b",
  "Camille_Pissarro_-_The_Garden_of_the_Tuileries_on_a_Winter_Afternoon_-_Google_Art_Project.jpg": "2/20",
  "Camille_pissarro,_autoritratto,_1873.JPG": "2/2d",
  "Cassatt_Mary_Young_Mother_Sewing_1900.jpg": "7/75",
  "Celia_Thaxter_in_Her_Garden_by_Childe_Hassam.JPG": "e/e6",
  "Childe_Hassam,_'Boston_Common_at_Twilight',_1885–86.jpg": "1/10",
  "Childe_Hassam_-_Champs_Elysées,_Paris.JPG": "a/a1",
  "Childe_Hassam_-_The_Room_of_Flowers.jpg": "8/8c",
  "Childe_Hassam_-_Washington_Arch,_Spring_-_Google_Art_Project.jpg": "c/cb",
  "Claude_Monet,_Impression,_soleil_levant.jpg": "5/54",
  "Claude_Monet,_Saint-Georges_majeur_au_crépuscule.jpg": "d/da",
  "Claude_Monet_-_Meules_-_Google_Art_Project.jpg": "1/16",
  "Claude_Monet_-_Poplars_on_the_Epte_-_Google_Art_Project.jpg": "d/d4",
  "Claude_Monet_-_Rouen_Cathedral,_Facade_(Sunset).JPG": "d/d1",
  "Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg": "7/78",
  "Claude_Monet_-_The_Thames_below_Westminster.jpg": "3/3c",
  "Claude_Monet_-_Water_Lilies_-_1906,_Chicago.jpg": "c/c3",
  "Claude_Monet_-_Water_Lilies_and_Japanese_Bridge.jpg": "a/ad",
  "Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg": "1/1b",
  "Claude_Monet_1899_Nadar_crop.jpg": "a/a4",
  "Edgar_Degas_-_A_Cotton_Office_in_New_Orleans_-_Google_Art_Project.jpg": "4/49",
  "Edgar_Degas_-_At_the_Races_-_Google_Art_Project.jpg": "9/96",
  "Edgar_Degas_-_Blue_Dancers_-_Google_Art_Project.jpg": "e/e2",
  "Edgar_Degas_-_In_a_Café_-_Google_Art_Project.jpg": "1/1f",
  "Edgar_Degas_-_L'Étoile.jpg": "d/dc",
  "Edgar_Degas_-_The_Ballet_Class_-_Google_Art_Project.jpg": "8/81",
  "Edgar_Degas_-_The_Dance_Foyer_at_the_Opera_on_the_rue_Le_Peletier_-_Google_Art_Project.jpg": "b/b6",
  "Edgar_Degas_-_The_Tub_-_Google_Art_Project.jpg": "0/0e",
  "Edgar_Degas_self_portrait_1855.jpeg": "a/a1",
  "Edouard_Manet_-_Berthe_Morisot_With_a_Bouquet_of_Violets_-_Google_Art_Project.jpg": "2/2c",
  "G._Caillebotte_-_Autoportrait_au_chevalet.jpg": "3/30",
  "G._Caillebotte_-_Le_pont_de_l'Europe.jpg": "f/fe",
  "Grabar_February_azure_1904_gtg.jpg": "7/74",
  "Grabar_February_azure_study_1904_nhmrb.jpg": "9/99",
  "Gustave_Caillebotte_-_Homme_au_bain.jpg": "8/89",
  "Gustave_Caillebotte_-_Jour_de_pluie_à_Paris.jpg": "d/d4",
  "Gustave_Caillebotte_-_Périssoires_sur_l'Yerres_-_Google_Art_Project.jpg": "4/49",
  "Gustave_Caillebotte_-_The_Floor_Planers_-_Google_Art_Project.jpg": "c/c0",
  "Gustave_Caillebotte_-_Young_Man_at_His_Window_-_Google_Art_Project.jpg": "3/30",
  "Hassam_-_Allies_Day,_May_1917.jpg": "9/95",
  "Horseneck_Falls_MET_DP161232.jpg": "8/85",
  "J._Alden_Weir_-_In_the_Sun.jpg": "1/11",
  "J._Alden_Weir_-_The_Red_Bridge_-_Google_Art_Project.jpg": "c/c5",
  "Joaquin_Sorolla,_1908_-_Beach_of_Valencia_by_Morning_Light.jpg": "f/fc",
  "Joaquin_Sorolla_-_El_baño_del_caballo.jpg": "c/c2",
  "Joaquin_Sorolla_by_Gertrude_Käsebier,_1908.jpg": "e/e8",
  "Joaquín_Sorolla_-_My_Wife_and_Daughters_in_the_Garden,_1910_-_Google_Art_Project.jpg": "8/88",
  "Joaquín_Sorolla_y_Bastida_-_Boys_on_the_Beach_-_Google_Art_Project.jpg": "c/ce",
  "Joaquín_Sorolla_y_Bastida_-_Children_at_the_Beach_(Javea)_-_Google_Art_Project.jpg": "c/cb",
  "Joaquín_Sorolla_y_Bastida_-_Sewing_the_Sail_-_Google_Art_Project.jpg": "e/e5",
  "Joaquín_Sorolla_y_Bastida_-_Strolling_along_the_Seashore_-_Google_Art_Project.jpg": "d/d9",
  "John_Henry_Twachtman_-_Icebound_-_Google_Art_Project.jpg": "4/4d",
  "John_Henry_Twachtman_-_Niagara_Falls_-_1929.6.142_-_Smithsonian_American_Art_Museum.jpg": "2/21",
  "John_Henry_Twachtman_-_The_White_Bridge_-_Google_Art_Project.jpg": "a/ab",
  "Julian_Alden_Weir_-_Midday_Rest_in_New_England_-_Google_Art_Project.jpg": "a/ad",
  "Julian_Alden_Weir_-_The_Factory_Village_-_Google_Art_Project.jpg": "c/cf",
  "Julian_Alden_Weir_-_The_Ice_Cutters_-_Google_Art_Project.jpg": "d/d0",
  "Lovis_Corinth_-_Pieta_-_Google_Art_Project.jpg": "7/7c",
  "Lovis_Corinth_-_Schlachthaus_-_Google_Art_Project.jpg": "1/12",
  "Lovis_Corinth_-_Walchensee,_Panorama_-_Google_Art_Project.jpg": "1/11",
  "Lovis_Corinth_Ostern_am_Walchensee_1922.jpg": "0/0f",
  "Lovis_Corinth_Selbstporträt_1896.jpg": "0/03",
  "Mary_Cassatt_-_In_the_Loge_-_Google_Art_Project.jpg": "2/24",
  "Mary_Cassatt_-_Little_Girl_in_a_Blue_Armchair_-_Google_Art_Project.jpg": "8/83",
  "Mary_Cassatt_-_Mother_and_Child_-_Google_Art_Project.jpg": "5/5e",
  "Mary_Cassatt_-_Self-Portrait_(c._1880).jpg": "6/6d",
  "Mary_Cassatt_-_Summertime_-_Google_Art_Project.jpg": "b/b4",
  "Mary_Cassatt_-_The_Boating_Party_-_Google_Art_Project.jpg": "d/d8",
  "Mary_Cassatt_-_The_Child's_Bath_-_Google_Art_Project.jpg": "7/72",
  "Mary_Cassatt_-_The_Letter_-_Google_Art_Project.jpg": "1/12",
  "Niagara_in_Winter_by_John_Henry_Twachtman,_c._1893,_oil_on_canvas_-_New_Britain_Museum_of_American_Art_-_DSC09580.JPG": "8/80",
  "P.S._Krøyer_-_Marie_Krøyer_painting_on_Skagen's_Beach_-_Google_Art_Project.jpg": "c/c0",
  "P.S._Krøyer_-_Selvportrait_-_Skagens_Museum.jpg": "7/7e",
  "P.S._Krøyer_-_Summer_evening_on_Skagen's_Beach._Anna_Ancher_and_Marie_Krøyer_walking_together._-_Google_Art_Project.jpg": "2/2e",
  "Peder_Severin_Krøyer_-_Fishermen_on_Skagen's_North_Beach_-_Google_Art_Project.jpg": "f/fe",
  "Peder_Severin_Krøyer_-_Summer_evening_at_Skagen._The_artist's_wife_and_dog_by_the_shore_-_Google_Art_Project.jpg": "b/bd",
  "Peter_Severin_Krøyer_-_Hip_Hip_Hurrah!_Artist_Festival_at_Skagen_-_Google_Art_Project.jpg": "c/c6",
  "Pierre-Auguste_Renoir,_Le_Moulin_de_la_Galette.jpg": "2/21",
  "Pierre-Auguste_Renoir_-_Autoportrait_5.JPG": "5/50",
  "Pierre-Auguste_Renoir_-_By_the_Seashore_-_Google_Art_Project.jpg": "4/44",
  "Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg": "8/8d",
  "Pierre-Auguste_Renoir_-_Suzanne_Valadon_-_Dance_at_Bougival.jpg": "f/f9",
  "Pierre-Auguste_Renoir_-_The_Swing_-_Google_Art_Project.jpg": "b/b8",
  "Pierre-Auguste_Renoir_-_Two_Sisters_(On_the_Terrace)_-_Google_Art_Project.jpg": "7/77",
  "Renoir_-_Alfred_Sisley_-_1876.jpeg": "3/37",
  "Robinson_A_Bird's-Eye_View.jpg": "b/b0",
  "Self-portrait_by_J._Alden_Weir,_1886,_National_Academy_of_Design.JPG": "c/c8",
  "Snow_in_March_by_Igor_Grabar,_1904.jpg": "4/47",
  "The_Boulevard_Montmartre_on_a_Winter_Morning.JPG": "1/1f",
  "The_Frost_by_Igor_Grabar,_1905.jpg": "5/55",
  "Theodore_Robinson_-_In_the_Orchard_-_Google_Art_Project.jpg": "1/16",
  "Theodore_Robinson_-_La_Vachère_-_Google_Art_Project.jpg": "6/60",
  "Theodore_Robinson_-_Port_Ben,_Delaware_and_Hudson_Canal_-_Google_Art_Project.jpg": "2/23",
  "Theodore_Robinson_-_The_Wedding_March.jpg": "6/6b",
  "Tom_Roberts_-_Arthur_Streeton_(sketch).jpg": "1/15",
};

// Direct upload.wikimedia.org URLs bypass Special:FilePath redirects for reliability
function wikiImg(filename, width) {
  const w = width || 800;
  const dbKey = filename.replace(/ /g, '_');
  const hashPath = WIKI_HASHES[dbKey];
  if (hashPath) {
    const enc = encodeURIComponent(dbKey);
    return `https://upload.wikimedia.org/wikipedia/commons/thumb/${hashPath}/${enc}/${w}px-${enc}`;
  }
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=${w}`;
}

const CONTENT = {

  // ─── HOME / OVERVIEW ───
  home: {
    title: 'American Impressionism',
    meta: 'Ten painters who brought the light of France to the American landscape',
    heroImg: wikiImg('Mary Cassatt - The Child\'s Bath - Google Art Project.jpg', 1200),
    heroTitle: 'The Child\'s Bath',
    heroSub: 'Mary Cassatt, 1893 — One of the defining works of American Impressionism',
    body: `
      <p>American Impressionism flourished between the 1880s and 1920s, as painters who had trained or
      traveled in France brought the movement's radical techniques home. Working with visible brushstrokes,
      vibrant color, and a commitment to capturing fleeting effects of light, these artists transformed
      the New England landscape, the urban streetscape, and everyday domestic life into luminous paintings
      that stand among the finest in American art history.</p>

      <p>Unlike their French counterparts, the American Impressionists often maintained a stronger emphasis
      on draftsmanship and a more restrained palette — reflecting both their academic training and the
      cooler, clearer light of the northeastern United States. Organizations like the Ten American Painters
      (founded 1897) helped establish Impressionism as the dominant mode of serious American painting
      at the turn of the twentieth century.</p>

      <h2 class="section-title">The Ten Artists</h2>
    `,
    cards: [
      { section: 'cassatt', name: 'Mary Cassatt', info: '1844–1926 · Philadelphia', img: wikiImg('Mary Cassatt - The Child\'s Bath - Google Art Project.jpg') },
      { section: 'hassam', name: 'Childe Hassam', info: '1859–1935 · Boston', img: wikiImg('Childe Hassam - Washington Arch, Spring - Google Art Project.jpg') },
      { section: 'robinson', name: 'Theodore Robinson', info: '1852–1896 · Vermont', img: wikiImg('Theodore Robinson - The Wedding March.jpg') },
      { section: 'twachtman', name: 'John Henry Twachtman', info: '1853–1902 · Cincinnati', img: wikiImg('John Henry Twachtman - Icebound - Google Art Project.jpg') },
      { section: 'weir', name: 'J. Alden Weir', info: '1852–1919 · Connecticut', img: wikiImg('Julian Alden Weir - The Factory Village - Google Art Project.jpg') },
      { section: 'chase', name: 'William Merritt Chase', info: '1849–1916 · Indiana', img: wikiImg('A Friendly Call.JPG') },
      { section: 'tarbell', name: 'Edmund Tarbell', info: '1862–1938 · Massachusetts', img: wikiImg('Edmund C. Tarbell - New England Interior - 1985.66 - Museum of Fine Arts.jpg') },
      { section: 'benson', name: 'Frank Weston Benson', info: '1862–1951 · Massachusetts', img: wikiImg('Portrait in White 1889 Frank Weston Benson.jpg') },
      { section: 'metcalf', name: 'Willard Metcalf', info: '1858–1925 · Maine', img: wikiImg('Willard Metcalf May Night.png') },
      { section: 'reid', name: 'Robert Reid', info: '1862–1929 · Massachusetts', img: wikiImg('Robert Lewis Reid - Fleur de Lis.jpg') },
    ]
  },

  // ─── HISTORY: ORIGINS ───
  origins: {
    title: 'Origins of Impressionism',
    meta: 'Paris, 1860s–1870s',
    body: `
      <p>The roots of Impressionism lie in the dissatisfaction of a generation of young French painters with
      the rigid conventions of the Académie des Beaux-Arts and its annual Salon exhibitions. Artists like
      Édouard Manet had already scandalized the art world with works like <em>Le Déjeuner sur l'herbe</em> (1863)
      and <em>Olympia</em> (1865), which departed from idealized classical subjects in favor of modern life.</p>

      <p>By the late 1860s, Claude Monet, Pierre-Auguste Renoir, Alfred Sisley, and Frédéric Bazille were
      painting together outdoors along the Seine, developing a new approach to capturing natural light.
      The Franco-Prussian War (1870–71) and the Paris Commune interrupted their work, but by 1874 they
      were ready to take a bold step.</p>

      <h2 class="section-title">The First Exhibition, 1874</h2>
      <p>On April 15, 1874, a group of thirty artists opened an independent exhibition at the studio of
      photographer Nadar on the Boulevard des Capucines. Among the works displayed was Monet's
      <em>Impression, Sunrise</em>, a hazy view of the port of Le Havre. Critic Louis Leroy seized upon
      the title to mock the entire exhibition in the satirical newspaper <em>Le Charivari</em>, calling
      the artists "Impressionists." The name stuck.</p>

      <blockquote>"Impression — I was certain of it. I was just telling myself that, since I was impressed,
      there had to be some impression in it… Wallpaper in its embryonic state is more finished than that seascape."
      <br>— Louis Leroy, <em>Le Charivari</em>, 1874</blockquote>

      <h2 class="section-title">Eight Exhibitions</h2>
      <p>Between 1874 and 1886, the group held eight independent exhibitions. Not all members participated
      in every show — personal disputes, financial pressures, and evolving artistic goals caused ongoing
      tensions. Degas insisted on including realist allies; Monet and Renoir occasionally returned to the
      Salon; and Cézanne drifted toward his own post-impressionist investigations. Yet together, these
      exhibitions established an alternative art world outside the Salon system, paving the way for the
      modern gallery and dealer networks that followed.</p>

      <h2 class="section-title">Key Influences</h2>
      <p>Several factors enabled the impressionist revolution:</p>
      <p><strong>Plein air painting</strong> — The invention of portable paint tubes in the 1840s and the
      development of the portable easel made it practical to paint outdoors. The Barbizon school painters
      (Corot, Millet, Rousseau) had already begun working <em>en plein air</em> in the Forest of Fontainebleau.</p>
      <p><strong>Photography</strong> — The camera freed painters from the obligation to faithfully record reality,
      encouraging experimentation with color, light, and subjective perception.</p>
      <p><strong>Japanese woodblock prints</strong> — The opening of Japan to Western trade in the 1850s
      introduced <em>ukiyo-e</em> prints by artists like Hiroshige and Hokusai, whose flat color areas,
      asymmetric compositions, and cropped forms deeply influenced Monet, Degas, and Cassatt.</p>
      <p><strong>Color theory</strong> — The scientific work of Michel Eugène Chevreul on simultaneous contrast
      and complementary colors gave painters a theoretical framework for the optical color mixing they
      practiced intuitively.</p>
    `
  },

  // ─── HISTORY: TECHNIQUES ───
  techniques: {
    title: 'Techniques & Style',
    meta: 'The visual language of Impressionism',
    body: `
      <p>Impressionism was not simply a new set of subjects; it was a fundamentally new way of seeing and
      rendering the visible world. Several interrelated techniques define the movement.</p>

      <h2 class="section-title">Broken Color & Visible Brushwork</h2>
      <p>Rather than blending pigments smoothly on the palette, Impressionists applied small, distinct
      strokes of pure color side by side on the canvas. Viewed from a distance, these strokes optically
      mix in the viewer's eye, producing a more vibrant and luminous effect than pre-mixed paint. Monet's
      late <em>Water Lilies</em> series and Renoir's dappled sunlight scenes exemplify this technique.</p>

      <h2 class="section-title">Light & Atmosphere</h2>
      <p>Capturing the transient effects of light became the central obsession. Monet famously painted the
      same subject — haystacks, Rouen Cathedral, the Thames — at different times of day and in different
      seasons, demonstrating that color and form are inseparable from the light that reveals them. Shadows
      were no longer simply dark; they were rendered in blues, purples, and greens.</p>

      <h2 class="section-title">Plein Air Practice</h2>
      <p>Working outdoors forced painters to work quickly before the light changed, encouraging spontaneity
      and a sketchlike quality that academic painters dismissed as "unfinished." This immediacy became a
      hallmark of the style — the painting as a record of a moment's perception rather than a carefully
      constructed composition.</p>

      <h2 class="section-title">Modern Subjects</h2>
      <p>The Impressionists rejected historical, mythological, and religious themes in favor of contemporary
      life: café terraces, railway stations, boating parties, ballet rehearsals, seaside holidays, and the
      rapidly transforming Parisian cityscape under Haussmann's renovations. As Baudelaire urged, they became
      "painters of modern life."</p>

      <h2 class="section-title">Composition</h2>
      <p>Influenced by Japanese prints and the snapshot quality of photography, Impressionist compositions
      often feature unusual viewpoints, asymmetric arrangements, and figures cropped at the edges of the
      canvas — as if the scene extends beyond the frame. Degas was the master of this approach, placing
      his dancers and bathers in strikingly modern, off-center compositions.</p>
    `
  },

  // ─── HISTORY: LEGACY ───
  legacy: {
    title: 'Legacy & Influence',
    meta: 'How Impressionism reshaped the art world',
    body: `
      <p>Impressionism's impact on the history of art is difficult to overstate. In breaking with academic
      convention, the movement opened the door to virtually every modern art movement that followed.</p>

      <h2 class="section-title">Post-Impressionism</h2>
      <p>Artists like Paul Cézanne, Georges Seurat, Paul Gauguin, and Vincent van Gogh built directly on
      impressionist innovations while pushing beyond them. Cézanne sought to "make of Impressionism something
      solid and durable, like the art of the museums." Seurat systematized optical color mixing into the
      precise dots of Pointillism. Gauguin and Van Gogh used vivid, non-naturalistic color for emotional
      expression, paving the way for Fauvism and Expressionism.</p>

      <h2 class="section-title">The Global Spread</h2>
      <p>By the 1880s and 1890s, impressionist ideas were spreading across Europe, the Americas, and
      beyond. American painters like Mary Cassatt (who exhibited with the group in Paris), Childe Hassam,
      and the Ten American Painters brought the style to the United States. In Spain, Joaquín Sorolla
      developed a luminous, light-saturated approach. Scandinavian, Russian, Australian, and Japanese
      artists all developed their own regional variants.</p>

      <h2 class="section-title">The Modern Art Market</h2>
      <p>The Impressionists' decision to exhibit independently and work with dealers like Paul Durand-Ruel
      established the gallery system that still dominates the art world today. Durand-Ruel's strategy of
      buying in bulk, promoting artists internationally, and cultivating collectors created the template
      for the modern art dealer.</p>

      <h2 class="section-title">Enduring Popularity</h2>
      <p>Impressionist paintings remain among the most beloved and recognized works of art in the world.
      Monet's <em>Water Lilies</em>, Renoir's <em>Dance at Le Moulin de la Galette</em>, and Degas's
      ballet scenes are cultural icons. Major exhibitions regularly draw record crowds, and impressionist
      works consistently achieve the highest prices at auction.</p>
    `
  },

  // ─── FRENCH IMPRESSIONISTS ───

  monet: {
    title: 'Claude Monet',
    dates: '1840–1926',
    nationality: 'French',
    portrait: wikiImg('Claude Monet 1899 Nadar crop.jpg'),
    bio: `Oscar-Claude Monet is often regarded as the founder and most consistent practitioner of Impressionism.
    Born in Paris and raised in Le Havre, he was introduced to plein air painting by Eugène Boudin as a teenager.
    His lifelong obsession with capturing the effects of light led him to paint the same subjects repeatedly
    under different conditions — haystacks, poplars, Rouen Cathedral, the Thames, and finally the water garden
    at his home in Giverny, where he spent the last three decades of his life creating the monumental
    <em>Water Lilies</em> (Nymphéas) series.`,
    works: [
      { title: 'Impression, Sunrise', date: '1872', img: wikiImg('Claude Monet, Impression, soleil levant.jpg'), desc: 'The painting that gave Impressionism its name, depicting the port of Le Havre at dawn' },
      { title: 'Water Lilies (Chicago)', date: '1906', img: wikiImg('Claude Monet - Water Lilies - 1906, Chicago.jpg'), desc: 'One of roughly 250 oil paintings of Monet\'s flower garden at Giverny' },
      { title: 'Woman with a Parasol', date: '1875', img: wikiImg('Claude Monet - Woman with a Parasol - Madame Monet and Her Son - Google Art Project.jpg'), desc: 'Monet\'s wife Camille and their son Jean on a breezy summer hillside' },
      { title: 'The Japanese Footbridge', date: '1899', img: wikiImg('Claude Monet - Water Lilies and Japanese Bridge.jpg'), desc: 'The iconic arched bridge over the lily pond in Monet\'s Giverny garden' },
      { title: 'Rouen Cathedral (Sunlight)', date: '1894', img: wikiImg('Claude Monet - Rouen Cathedral, Facade (Sunset).JPG'), desc: 'Part of a series capturing the cathedral facade under changing light conditions' },
      { title: 'San Giorgio Maggiore at Dusk', date: '1908', img: wikiImg('Claude Monet, Saint-Georges majeur au crépuscule.jpg'), desc: 'A Venetian church silhouetted against a shimmering twilight sky' },
      { title: 'The Thames below Westminster', date: '1871', img: wikiImg('Claude Monet - The Thames below Westminster.jpg'), desc: 'London\'s Houses of Parliament shrouded in fog, painted during Monet\'s exile' },
      { title: 'Haystacks (End of Summer)', date: '1891', img: wikiImg('Claude Monet - Meules - Google Art Project.jpg'), desc: 'From Monet\'s landmark series studying light\'s effect on grain stacks across seasons' },
      { title: 'Poplars on the Epte', date: '1891', img: wikiImg('Claude Monet - Poplars on the Epte - Google Art Project.jpg'), desc: 'Tall poplars lining the River Epte, rendered in rhythmic vertical brushstrokes' },
      { title: 'The Magpie', date: '1869', img: wikiImg('Claude Monet - The Magpie - Google Art Project.jpg'), desc: 'A solitary bird perched on a gate in a luminous winter landscape' },
    ]
  },

  renoir: {
    title: 'Pierre-Auguste Renoir',
    dates: '1841–1919',
    nationality: 'French',
    portrait: wikiImg('Pierre-Auguste Renoir - Autoportrait 5.JPG'),
    bio: `Renoir was the most sensuous of the Impressionists, celebrated for his luminous, warm palette and
    his joyful depictions of Parisian social life. A porcelain painter in his youth, he brought a craftsman's
    feel for surface and decoration to his work. In the 1880s he went through a "dry" or "Ingres" period,
    tightening his drawing under the influence of classical art, before returning to a softer, more
    voluptuous style in his final decades. Despite severe rheumatoid arthritis that confined him to a
    wheelchair, he continued painting until his death.`,
    works: [
      { title: 'Dance at Le Moulin de la Galette', date: '1876', img: wikiImg('Pierre-Auguste Renoir, Le Moulin de la Galette.jpg'), desc: 'A sunlit outdoor dance at a popular Montmartre gathering spot' },
      { title: 'Luncheon of the Boating Party', date: '1881', img: wikiImg('Pierre-Auguste Renoir - Luncheon of the Boating Party - Google Art Project.jpg'), desc: 'Friends dining on a balcony overlooking the Seine at Chatou' },
      { title: 'La Grenouillère', date: '1869', img: wikiImg('Auguste Renoir - La Grenouillère - Google Art Project.jpg'), desc: 'Bathers at a floating café on the Seine, painted alongside Monet' },
      { title: 'Girl with a Watering Can', date: '1876', img: wikiImg('Auguste Renoir - A Girl with a Watering Can - Google Art Project.jpg'), desc: 'A young girl standing in a sunlit garden holding a blue watering can' },
      { title: 'Dance at Bougival', date: '1883', img: wikiImg('Pierre-Auguste Renoir - Suzanne Valadon - Dance at Bougival.jpg'), desc: 'A couple waltzing at an outdoor dance hall along the Seine' },
      { title: 'Two Sisters (On the Terrace)', date: '1881', img: wikiImg('Pierre-Auguste Renoir - Two Sisters (On the Terrace) - Google Art Project.jpg'), desc: 'Two young women on a flower-filled terrace above the Seine' },
      { title: 'The Swing', date: '1876', img: wikiImg('Pierre-Auguste Renoir - The Swing - Google Art Project.jpg'), desc: 'A woman on a garden swing dappled with sunlight through the trees' },
      { title: 'By the Seashore', date: '1883', img: wikiImg('Pierre-Auguste Renoir - By the Seashore - Google Art Project.jpg'), desc: 'A fashionably dressed woman seated on a wicker chair by the coast' },
    ]
  },

  degas: {
    title: 'Edgar Degas',
    dates: '1834–1917',
    nationality: 'French',
    portrait: wikiImg('Edgar Degas self portrait 1855.jpeg'),
    bio: `Degas is often classified among the Impressionists, though he preferred the term "Realist" and
    differed from his colleagues in significant ways. Trained in the classical tradition, he maintained
    a lifelong commitment to drawing and worked primarily in the studio rather than outdoors. His genius
    lay in his radical compositions — influenced by Japanese prints and photography — and his penetrating
    observation of movement, especially in his famous scenes of ballet dancers, racehorses, and women bathing.
    He was also an accomplished sculptor, printmaker, and photographer.`,
    works: [
      { title: 'The Dance Class', date: '1874', img: wikiImg('Edgar Degas - The Ballet Class - Google Art Project.jpg'), desc: 'Young ballerinas rehearsing under the watchful eye of ballet master Jules Perrot' },
      { title: 'L\'Absinthe', date: '1876', img: wikiImg('Edgar Degas - In a Café - Google Art Project.jpg'), desc: 'Two solitary figures seated in a Parisian café, a study of urban isolation' },
      { title: 'The Star (L\'Étoile)', date: '1878', img: wikiImg('Edgar Degas - L\'Étoile.jpg'), desc: 'A prima ballerina taking her bow on stage, seen from an elevated angle' },
      { title: 'Blue Dancers', date: 'c. 1899', img: wikiImg('Edgar Degas - Blue Dancers - Google Art Project.jpg'), desc: 'Four dancers in vivid blue tutus adjusting their costumes backstage' },
      { title: 'The Dance Foyer at the Opera', date: '1872', img: wikiImg('Edgar Degas - The Dance Foyer at the Opera on the rue Le Peletier - Google Art Project.jpg'), desc: 'Dancers practicing in the rehearsal room of the old Paris Opera' },
      { title: 'At the Races', date: '1877–80', img: wikiImg('Edgar Degas - At the Races - Google Art Project.jpg'), desc: 'Jockeys and horses gathering before a race at Longchamp' },
      { title: 'The Tub', date: '1886', img: wikiImg('Edgar Degas - The Tub - Google Art Project.jpg'), desc: 'A woman bathing in a shallow tub, viewed from an intimate overhead angle' },
      { title: 'Cotton Exchange, New Orleans', date: '1873', img: wikiImg('Edgar Degas - A Cotton Office in New Orleans - Google Art Project.jpg'), desc: 'Businessmen examining cotton samples in Degas\'s uncle\'s office in New Orleans' },
    ]
  },

  morisot: {
    title: 'Berthe Morisot',
    dates: '1841–1895',
    nationality: 'French',
    portrait: wikiImg('Edouard Manet - Berthe Morisot With a Bouquet of Violets - Google Art Project.jpg'),
    bio: `Berthe Morisot was one of the founding members of the Impressionist group and participated in
    seven of the eight exhibitions. Encouraged by Corot and later influenced by her brother-in-law Édouard
    Manet, she developed a distinctive style marked by loose, feathery brushwork and a delicate palette of
    whites, pastels, and silvery greens. Her subjects — domestic interiors, gardens, women and children —
    reflected her world, but her painterly freedom and compositional daring were anything but conventional.
    She was instrumental in organizing the group's exhibitions and securing critical support.`,
    works: [
      { title: 'The Cradle', date: '1872', img: wikiImg('Berthe Morisot - The Cradle - Google Art Project.jpg'), desc: 'Morisot\'s sister Edma watching over her sleeping infant daughter' },
      { title: 'Summer\'s Day', date: '1879', img: wikiImg('Berthe Morisot - Jour d\'été - Musée d\'arts de Nantes.jpg'), desc: 'Two elegantly dressed women boating on the lake in the Bois de Boulogne' },
      { title: 'Woman at Her Toilette', date: 'c. 1875–80', img: wikiImg('Berthe Morisot - Woman at Her Toilette - Google Art Project.jpg'), desc: 'A woman at her dressing table, rendered in Morisot\'s signature feathery brushwork' },
      { title: 'In the Garden at Maurecourt', date: '1884', img: wikiImg('Berthe Morisot - In the Garden at Maurecourt.jpg'), desc: 'Figures amid lush greenery in a tranquil country garden' },
      { title: 'The Butterfly Hunt', date: '1874', img: wikiImg('Berthe Morisot - The Butterfly Hunt - Google Art Project.jpg'), desc: 'Women and children chasing butterflies through a sunlit meadow' },
      { title: 'Young Girl by the Window', date: '1878', img: wikiImg('Berthe Morisot - Young Girl by the Window - Google Art Project.jpg'), desc: 'A pensive young woman gazing out from a bright, airy interior' },
    ]
  },

  pissarro: {
    title: 'Camille Pissarro',
    dates: '1830–1903',
    nationality: 'French (born Danish West Indies)',
    portrait: wikiImg('Camille pissarro, autoritratto, 1873.JPG'),
    bio: `The eldest of the Impressionists, Pissarro was the only artist to participate in all eight
    independent exhibitions and served as a mentor and unifying figure for the group. Born in the Danish
    West Indies (now the U.S. Virgin Islands), he brought a broad, cosmopolitan perspective to French
    painting. His subjects ranged from rural landscapes and peasant scenes to the bustling boulevards
    of Paris, which he painted from hotel windows in his later years. He briefly adopted Seurat's
    Pointillist technique in the 1880s before returning to his own fluid, atmospheric approach.`,
    works: [
      { title: 'Boulevard Montmartre at Night', date: '1897', img: wikiImg('Camille Pissarro - The Boulevard Montmartre at Night - Google Art Project.jpg'), desc: 'A glittering nighttime view of gas-lit Paris from a hotel window' },
      { title: 'The Harvest, Pontoise', date: '1881', img: wikiImg('Camille Pissarro - La Récolte, Pontoise - Google Art Project.jpg'), desc: 'Peasants gathering the harvest in the rolling countryside near Pontoise' },
      { title: 'The Boulevard Montmartre, Winter Morning', date: '1897', img: wikiImg('The Boulevard Montmartre on a Winter Morning.JPG'), desc: 'The same boulevard on a crisp winter morning with bare trees and carriages' },
      { title: 'Avenue de l\'Opéra, Sunshine', date: '1898', img: wikiImg('Camille Pissarro - Avenue de l\'Opéra - Sunshine, Winter Morning - Google Art Project.jpg'), desc: 'A bird\'s-eye view of the grand Parisian avenue bathed in winter sunlight' },
      { title: 'Red Roofs', date: '1877', img: wikiImg('Camille Pissarro - Lordship Lane Station - Google Art Project.jpg'), desc: 'Lordship Lane Station in south London, a rare English subject for Pissarro' },
      { title: 'The Côte des Bœufs at L\'Hermitage', date: '1877', img: wikiImg('Camille Pissarro - La Côte des Bœufs à l\'Hermitage - Google Art Project.jpg'), desc: 'A dense screen of trees framing houses on a hillside near Pontoise' },
      { title: 'The Garden of the Tuileries on a Winter Afternoon', date: '1899', img: wikiImg('Camille Pissarro - The Garden of the Tuileries on a Winter Afternoon - Google Art Project.jpg'), desc: 'The formal Tuileries gardens under a grey Parisian winter sky' },
    ]
  },

  sisley: {
    title: 'Alfred Sisley',
    dates: '1839–1899',
    nationality: 'British (active in France)',
    portrait: wikiImg('Renoir - Alfred Sisley - 1876.jpeg'),
    bio: `Though born in Paris to English parents, Sisley was one of the most dedicated landscape painters
    among the Impressionists. He rarely ventured beyond landscape, focusing on the countryside around
    Paris — the Seine valley, Louveciennes, Marly-le-Roi, and Moret-sur-Loing, where he spent his final
    years. His work is characterized by a delicate sensitivity to the sky, which he considered "the chief
    organ" of a landscape painting. Despite producing some of the finest Impressionist landscapes, Sisley
    struggled financially throughout his life and died in poverty.`,
    works: [
      { title: 'Flood at Port-Marly', date: '1876', img: wikiImg('Alfred Sisley - Flood at Port-Marly - Google Art Project.jpg'), desc: 'Floodwaters from the Seine surrounding buildings in the village of Port-Marly' },
      { title: 'Bridge at Villeneuve-la-Garenne', date: '1872', img: wikiImg('Alfred Sisley - The Bridge at Villeneuve-la-Garenne - Google Art Project.jpg'), desc: 'A stone bridge spanning the Seine under an expansive, cloud-filled sky' },
      { title: 'Snow at Louveciennes', date: '1878', img: wikiImg('Alfred Sisley - Snow at Louveciennes - Google Art Project.jpg'), desc: 'A quiet village road blanketed in fresh snow with soft grey skies' },
      { title: 'The Lane of Poplars at Moret', date: '1890', img: wikiImg('Alfred Sisley 044.jpg'), desc: 'A tree-lined path near Moret-sur-Loing where Sisley spent his final years' },
      { title: 'Molesey Weir, Hampton Court', date: '1874', img: wikiImg('Alfred Sisley - Molesey Weir, Hampton Court - Google Art Project.jpg'), desc: 'Rushing water at the weir on the Thames during Sisley\'s visit to England' },
      { title: 'The Terrace at Saint-Germain', date: '1875', img: wikiImg('Alfred Sisley - The Terrace at Saint-Germain, Spring - Google Art Project.jpg'), desc: 'A panoramic springtime view from the terrace overlooking the Seine valley' },
    ]
  },

  caillebotte: {
    title: 'Gustave Caillebotte',
    dates: '1848–1894',
    nationality: 'French',
    portrait: wikiImg('G. Caillebotte - Autoportrait au chevalet.jpg'),
    bio: `A wealthy naval engineer and painter, Caillebotte occupied a unique position among the Impressionists
    as both a participant and a patron. His style combined impressionist light effects with a more precise,
    almost photographic realism and a dramatic use of perspective that anticipated cinema. He organized and
    financed several of the group's exhibitions, and his personal collection of impressionist paintings —
    bequeathed to the French state upon his death — formed the nucleus of the impressionist holdings now
    at the Musée d'Orsay.`,
    works: [
      { title: 'Paris Street; Rainy Day', date: '1877', img: wikiImg('Gustave Caillebotte - Jour de pluie à Paris.jpg'), desc: 'Pedestrians with umbrellas crossing a Haussmann-era Parisian intersection' },
      { title: 'The Floor Scrapers', date: '1875', img: wikiImg('Gustave Caillebotte - The Floor Planers - Google Art Project.jpg'), desc: 'Workers scraping a wooden floor, a bold depiction of urban labor' },
      { title: 'Man at His Bath', date: '1884', img: wikiImg('Gustave Caillebotte - Homme au bain.jpg'), desc: 'A man drying himself after a bath, an unusually candid male nude for the era' },
      { title: 'Le pont de l\'Europe', date: '1876', img: wikiImg('G. Caillebotte - Le pont de l\'Europe.jpg'), desc: 'Figures crossing the iron railway bridge near the Gare Saint-Lazare' },
      { title: 'Oarsmen on the Yerres', date: '1877', img: wikiImg('Gustave Caillebotte - Périssoires sur l\'Yerres - Google Art Project.jpg'), desc: 'Rowers gliding along the River Yerres near the family estate' },
      { title: 'Young Man at His Window', date: '1876', img: wikiImg('Gustave Caillebotte - Young Man at His Window - Google Art Project.jpg'), desc: 'A man gazing from a balcony onto a sunlit Parisian boulevard below' },
    ]
  },

  // ─── AMERICAN IMPRESSIONISTS ───

  cassatt: {
    title: 'Mary Cassatt',
    dates: '1844–1926',
    nationality: 'American (active in France)',
    portrait: wikiImg('Mary Cassatt - Self-Portrait (c. 1880).jpg'),
    bio: `Mary Cassatt was the only American artist to exhibit with the French Impressionists. Born in
    Pennsylvania to a prosperous family, she moved to Paris in 1866 and was invited by Degas to join
    the independent exhibitions in 1877. Her subjects — mothers and children, women at tea, scenes of
    domestic life — are rendered with a bold compositional eye strongly influenced by Japanese prints.
    She was instrumental in introducing Impressionism to American collectors, advising friends like Louisine
    Havemeyer on purchases that would ultimately enrich American museums.`,
    works: [
      { title: 'The Child\'s Bath', date: '1893', img: wikiImg('Mary Cassatt - The Child\'s Bath - Google Art Project.jpg'), desc: 'A mother tenderly bathing her child, influenced by Japanese woodblock prints' },
      { title: 'Little Girl in a Blue Armchair', date: '1878', img: wikiImg('Mary Cassatt - Little Girl in a Blue Armchair - Google Art Project.jpg'), desc: 'A child sprawled casually across oversized blue armchairs' },
      { title: 'The Boating Party', date: '1893–94', img: wikiImg('Mary Cassatt - The Boating Party - Google Art Project.jpg'), desc: 'A mother and child aboard a small boat with a darkly silhouetted oarsman' },
      { title: 'Summertime', date: 'c. 1894', img: wikiImg('Mary Cassatt - Summertime - Google Art Project.jpg'), desc: 'Two women feeding ducks from a boat on a sun-dappled pond' },
      { title: 'Young Mother Sewing', date: '1900', img: wikiImg('Cassatt Mary Young Mother Sewing 1900.jpg'), desc: 'A mother sewing while her child leans against her in quiet intimacy' },
      { title: 'In the Loge', date: '1878', img: wikiImg('Mary Cassatt - In the Loge - Google Art Project.jpg'), desc: 'A woman with opera glasses in a theater box, observed while observing' },
      { title: 'The Letter', date: '1891', img: wikiImg('Mary Cassatt - The Letter - Google Art Project.jpg'), desc: 'A woman sealing a letter, from Cassatt\'s celebrated color print series' },
      { title: 'Mother and Child', date: '1905', img: wikiImg('Mary Cassatt - Mother and Child - Google Art Project.jpg'), desc: 'A tender embrace between mother and child in warm, golden tones' },
    ]
  },

  hassam: {
    title: 'Childe Hassam',
    dates: '1859–1935',
    nationality: 'American',
    portrait: wikiImg('Childe Hassam - Washington Arch, Spring - Google Art Project.jpg'),
    bio: `Frederick Childe Hassam was the leading figure of American Impressionism. After studying in
    Paris from 1886 to 1889, he returned to the United States and became a founding member of the "Ten
    American Painters," a group that seceded from the Society of American Artists to exhibit impressionist
    work. Hassam is best known for his vibrant urban scenes of New York and Boston, his sun-drenched views
    of the New England coast, and his celebrated Flag series, depicting Fifth Avenue draped in Allied flags
    during World War I. He was enormously prolific, producing over 3,000 paintings, watercolors, and prints.`,
    works: [
      { title: 'Allies Day, May 1917', date: '1917', img: wikiImg('Hassam - Allies Day, May 1917.jpg'), desc: 'Fifth Avenue draped in Allied flags during a World War I patriotic rally' },
      { title: 'The Room of Flowers', date: '1894', img: wikiImg('Childe Hassam - The Room of Flowers.jpg'), desc: 'A light-filled interior overflowing with potted flowers and morning sun' },
      { title: 'Boston Common at Twilight', date: '1885–86', img: wikiImg('Childe Hassam, \'Boston Common at Twilight\', 1885–86.jpg'), desc: 'Strollers on Boston Common as gas lamps glow against a dusky winter sky' },
      { title: 'Celia Thaxter\'s Garden', date: '1892', img: wikiImg('Celia Thaxter in Her Garden by Childe Hassam.JPG'), desc: 'The poet Celia Thaxter surrounded by her famous garden on Appledore Island' },
      { title: 'Washington Arch, Spring', date: '1890', img: wikiImg('Childe Hassam - Washington Arch, Spring - Google Art Project.jpg'), desc: 'New York\'s Washington Square arch framed by budding spring trees' },
      { title: 'Champs Élysées, Paris', date: '1889', img: wikiImg('Childe Hassam - Champs Elysées, Paris.JPG'), desc: 'Carriages and pedestrians along the grand Parisian boulevard on a grey day' },
    ]
  },

  robinson: {
    title: 'Theodore Robinson',
    dates: '1852–1896',
    nationality: 'American',
    portrait: wikiImg('Theodore Robinson - The Wedding March.jpg'),
    bio: `Theodore Robinson was one of the first American painters to adopt Impressionism after befriending
    Claude Monet at Giverny in the late 1880s. His work blends impressionist light and color with a
    structured, tonal approach that reflects his American training. Robinson spent several summers at
    Giverny between 1887 and 1892, painting the village, its inhabitants, and the surrounding countryside
    with a quiet, contemplative sensibility. He returned to the United States in 1892 and spent his
    remaining years painting in Vermont, New Jersey, and New York before his early death at forty-three.`,
    works: [
      { title: 'The Wedding March', date: '1892', img: wikiImg('Theodore Robinson - The Wedding March.jpg'), desc: 'A bridal procession leaving a village church in Giverny' },
      { title: 'Port Ben, Delaware and Hudson Canal', date: '1893', img: wikiImg('Theodore Robinson - Port Ben, Delaware and Hudson Canal - Google Art Project.jpg'), desc: 'Canal boats moored along the Delaware and Hudson Canal in New York' },
      { title: 'A Bird\'s-Eye View', date: '1889', img: wikiImg('Robinson A Bird\'s-Eye View.jpg'), desc: 'An elevated view of the Giverny landscape with fields and rooftops' },
      { title: 'In the Orchard', date: '1891', img: wikiImg('Theodore Robinson - In the Orchard - Google Art Project.jpg'), desc: 'A woman reading beneath blossoming fruit trees in dappled sunlight' },
      { title: 'La Vachère', date: '1888', img: wikiImg('Theodore Robinson - La Vachère - Google Art Project.jpg'), desc: 'A cowherd tending cattle in the meadows near Giverny' },
    ]
  },

  twachtman: {
    title: 'John Henry Twachtman',
    dates: '1853–1902',
    nationality: 'American',
    portrait: wikiImg('John Henry Twachtman - Icebound - Google Art Project.jpg'),
    bio: `Twachtman was one of the most lyrical and experimental of the American Impressionists. Trained
    in Munich and later in Paris under the academic painter Jules Lefebvre, he evolved through several
    styles before arriving at a highly personal form of Impressionism characterized by subtle tonal
    harmonies, near-abstract compositions, and an intimate connection to landscape. His paintings of
    his property at Horseneck Falls in Greenwich, Connecticut — its brook, waterfall, garden, and
    surrounding woods in every season — are among the finest achievements of American Impressionism.`,
    works: [
      { title: 'Horseneck Falls', date: 'c. 1889–1900', img: wikiImg('Horseneck Falls MET DP161232.jpg'), desc: 'A cascading waterfall on Twachtman\'s Greenwich, Connecticut property' },
      { title: 'Icebound', date: 'c. 1889', img: wikiImg('John Henry Twachtman - Icebound - Google Art Project.jpg'), desc: 'A frozen brook in muted whites and blues, nearly abstract in its simplicity' },
      { title: 'Niagara Falls', date: 'c. 1894', img: wikiImg('John Henry Twachtman - Niagara Falls - 1929.6.142 - Smithsonian American Art Museum.jpg'), desc: 'The mighty falls rendered in a soft, atmospheric impressionist style' },
      { title: 'Niagara in Winter', date: 'c. 1893', img: wikiImg('Niagara in Winter by John Henry Twachtman, c. 1893, oil on canvas - New Britain Museum of American Art - DSC09580.JPG'), desc: 'Ice-encrusted Niagara Falls in a tonalist palette of whites and greys' },
      { title: 'The White Bridge', date: 'c. 1900', img: wikiImg('John Henry Twachtman - The White Bridge - Google Art Project.jpg'), desc: 'A small white footbridge over a brook, bathed in green summer light' },
    ]
  },

  weir: {
    title: 'J. Alden Weir',
    dates: '1852–1919',
    nationality: 'American',
    portrait: wikiImg('Self-portrait by J. Alden Weir, 1886, National Academy of Design.JPG'),
    bio: `Julian Alden Weir was a founding member of the Ten American Painters and one of the leading
    figures in bringing Impressionism to the United States. Initially resistant to the movement — he
    called the Third Impressionist Exhibition "worse than the Chamber of Horrors" after visiting Paris
    in 1877 — he gradually adopted impressionist techniques during the 1880s. His mature work is
    characterized by a gentle, silvery palette and a contemplative approach to landscape and figure
    painting, particularly scenes of his Connecticut farm.`,
    works: [
      { title: 'The Red Bridge', date: '1895', img: wikiImg('J. Alden Weir - The Red Bridge - Google Art Project.jpg'), desc: 'A vivid red iron bridge spanning a quiet Connecticut stream' },
      { title: 'In the Sun', date: '1899', img: wikiImg('J. Alden Weir - In the Sun.jpg'), desc: 'A woman seated outdoors in bright sunlight filtered through trees' },
      { title: 'The Factory Village', date: '1897', img: wikiImg('Julian Alden Weir - The Factory Village - Google Art Project.jpg'), desc: 'A New England mill town nestled in a silvery, atmospheric landscape' },
      { title: 'Midday Rest in New England', date: '1897', img: wikiImg('Julian Alden Weir - Midday Rest in New England - Google Art Project.jpg'), desc: 'Cattle resting under shade trees in the warm midday Connecticut sun' },
      { title: 'The Ice Cutters', date: 'c. 1890', img: wikiImg('Julian Alden Weir - The Ice Cutters - Google Art Project.jpg'), desc: 'Workers harvesting ice from a frozen pond in the winter countryside' },
    ]
  },

  chase: {
    title: 'William Merritt Chase',
    dates: '1849–1916',
    nationality: 'American',
    portrait: wikiImg('A Friendly Call.JPG'),
    bio: `William Merritt Chase was one of the most influential American painters of the Gilded Age and a
    tireless champion of modern art in the United States. Trained in Munich and New York, he established
    the Shinnecock Hills Summer School of Art on Long Island in 1891 — the first outdoor art school in
    America — and later founded the Chase School, which became the New York School of Art. His work ranges
    from bravura studio interiors to sun-flooded plein air landscapes, and his teaching shaped a generation
    of American modernists including Georgia O'Keeffe and Edward Hopper.`,
    works: [
      { title: 'A Friendly Call', date: '1895', img: wikiImg('A Friendly Call.JPG') },
      { title: 'At the Seaside', date: 'c. 1892', img: wikiImg('At the Seaside MET DT95.jpg') },
      { title: 'Hide and Seek', date: '1888', img: wikiImg('William Merritt Chase - Hide and Seek - Google Art Project.jpg') },
      { title: 'Idle Hours', date: 'c. 1894', img: wikiImg('William Merritt Chase - Idle Hours (c. 1894).jpg') },
      { title: 'The Open Air Breakfast', date: 'c. 1888', img: wikiImg('William Merritt Chase - The Open Air Breakfast - Google Art Project.jpg') },
    ]
  },

  tarbell: {
    title: 'Edmund Tarbell',
    dates: '1862–1938',
    nationality: 'American',
    portrait: wikiImg('Edmund C. Tarbell - New England Interior - 1985.66 - Museum of Fine Arts.jpg'),
    bio: `Edmund Tarbell was the central figure of the Boston School, a group of painters who extended
    Impressionism into intimate interior scenes of extraordinary refinement. Trained at the École des
    Beaux-Arts in Paris, he returned to Boston and taught at the School of the Museum of Fine Arts for
    decades, profoundly shaping New England's artistic culture. His mature work combines the dappled
    light of Impressionism with the old-master quietude of Vermeer — sunlit rooms, women reading or
    sewing, the play of light on white muslin and polished surfaces.`,
    works: [
      { title: 'Across the Room', date: 'c. 1899', img: wikiImg('Edmund Charles Tarbell - Across the Room - Google Art Project.jpg') },
      { title: 'New England Interior', date: '1906', img: wikiImg('Edmund C. Tarbell - New England Interior - 1985.66 - Museum of Fine Arts.jpg') },
      { title: 'Mercie Cutting Flowers', date: '1912', img: wikiImg('Edmund C. Tarbell - Mercie Cutting Flowers - Google Art Project.jpg') },
      { title: 'Josephine and Mercie', date: '1908', img: wikiImg('Edmund C. Tarbell - Josephine and Mercie - Google Art Project.jpg') },
      { title: 'My Family', date: '1914', img: wikiImg('Edmund C. Tarbell - My Family - Google Art Project.jpg') },
    ]
  },

  benson: {
    title: 'Frank Weston Benson',
    dates: '1862–1951',
    nationality: 'American',
    portrait: wikiImg('Portrait in White 1889 Frank Weston Benson.jpg'),
    bio: `Frank Weston Benson was a founding member of the Ten American Painters and one of the most
    commercially successful American artists of his era. Like his close friend Edmund Tarbell, he trained
    in Paris and taught at the Boston Museum School. His early Impressionist work features luminous outdoor
    scenes of women and children in brilliant sunlight — figures posed on hillsides and breezy porches
    against glittering water. In later decades he turned to sporting subjects, becoming especially celebrated
    for his etchings and watercolors of wildfowl in flight.`,
    works: [
      { title: 'Portrait in White', date: '1889', img: wikiImg('Portrait in White 1889 Frank Weston Benson.jpg') },
      { title: 'Summer', date: '1909', img: wikiImg('Frank Weston Benson - Summer - Google Art Project.jpg') },
      { title: 'Calm Morning', date: '1904', img: wikiImg('Calm Morning 1904 Frank Weston Benson.jpg') },
      { title: 'Eleanor', date: '1907', img: wikiImg('Eleanor 1907 Frank Weston Benson.jpg') },
      { title: 'The Sisters', date: '1899', img: wikiImg('The sisters 1889 Frank Weston Benson.jpg') },
    ]
  },

  metcalf: {
    title: 'Willard Metcalf',
    dates: '1858–1925',
    nationality: 'American',
    portrait: wikiImg('Willard Metcalf May Night.png'),
    bio: `Willard Metcalf was a founding member of the Ten American Painters whose career took a
    remarkable late arc. After years of struggle and personal difficulty, he rediscovered his artistic
    voice around 1905 and produced his finest paintings — luminous, deeply felt landscapes of rural
    New England in every season. Working in Connecticut, Vermont, and Maine, he captured the unique
    quality of northeastern American light with a directness and emotional depth that set him apart
    from more fashionable contemporaries. His spring and winter landscapes in particular are among
    the most beloved works in American Impressionism.`,
    works: [
      { title: 'May Night', date: '1906', img: wikiImg('Willard Metcalf May Night.png') },
      { title: 'A Family of Birches', date: 'c. 1906', img: wikiImg('Willard Leroy Metcalf - A Family of Birches - Google Art Project.jpg') },
      { title: 'Twin Birches', date: '1908', img: wikiImg('\'The Twin Birches\' by Willard L. Metcalf, 1908.JPG') },
      { title: 'Sunlight and Shadow', date: 'c. 1909', img: wikiImg('Willard Leroy Metcalf - Sunlight and Shadow - Google Art Project.jpg') },
      { title: 'Icebound', date: '1909', img: wikiImg('Ice Bound, Art Institute Of Chicago, Willard L. Metcalf (NBY 416358).jpg') },
    ]
  },

  reid: {
    title: 'Robert Reid',
    dates: '1862–1929',
    nationality: 'American',
    portrait: wikiImg('Robert Lewis Reid - Fleur de Lis.jpg'),
    bio: `Robert Reid was a founding member of the Ten American Painters known for his decorative,
    flower-filled canvases that blend Impressionist technique with an almost mural-like sense of
    design. Trained in Boston and Paris, he worked prolifically in oils, watercolors, and stained
    glass — his windows for the Library of Congress and the Massachusetts State House rank among
    the finest American decorative art of the period. His paintings typically feature women in
    gardens or interiors, suffused with pale light and surrounded by blossoms in a manner that
    bridges Impressionism and the decorative arts movement.`,
    works: [
      { title: 'Fleur-de-Lis', date: 'c. 1899', img: wikiImg('Robert Lewis Reid - Fleur de Lis.jpg') },
      { title: 'The White Parasol', date: 'c. 1907', img: wikiImg('Robert Reid - The White Parasol - 1909.7.57 - Smithsonian American Art Museum.jpg') },
      { title: 'Spring', date: 'c. 1899', img: wikiImg('Robert Lewis Reid - Spring.jpg') },
      { title: 'The Violet Kimono', date: 'c. 1910', img: wikiImg('Robert Reid - The Violet Kimono - 1929.6.88 - Smithsonian American Art Museum.jpg') },
      { title: 'Spring (II)', date: 'c. 1905', img: wikiImg('Robert Lewis Reid - Spring 02.jpg') },
    ]
  },

};
