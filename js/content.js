// ============================================
// Content data for Impressionism website
// All images: Wikimedia Commons (public domain)
// ============================================

const WIKI = 'https://upload.wikimedia.org/wikipedia/commons';

const CONTENT = {

  // ─── HOME / OVERVIEW ───
  home: {
    title: 'Impressionism: A Global Survey',
    meta: 'An exploration of the movement, its artists, and their enduring works',
    heroImg: `${WIKI}/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg`,
    heroTitle: 'Impression, Sunrise',
    heroSub: 'Claude Monet, 1872 — The painting that gave the movement its name',
    body: `
      <p>Impressionism emerged in Paris in the 1860s and 1870s as a radical departure from academic painting.
      Characterized by visible brushstrokes, open composition, emphasis on light in its changing qualities,
      and ordinary subject matter, the movement challenged the conventions of the French Salon and forever
      altered the trajectory of Western art.</p>

      <p>What began as a small group of French painters exhibiting independently soon grew into an international
      phenomenon. From the sun-drenched coasts of Spain to the eucalyptus-lined creeks of Australia, artists
      around the world adopted and adapted impressionist techniques to capture the fleeting effects of light
      and atmosphere in their own landscapes and cultures.</p>

      <h2 class="section-title">Explore by Region</h2>
    `,
    cards: [
      { section: 'monet', name: 'French Impressionists', info: 'Monet, Renoir, Degas, Morisot & more', img: `${WIKI}/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Chicago.jpg` },
      { section: 'cassatt', name: 'American Impressionists', info: 'Cassatt, Hassam, Robinson & more', img: `${WIKI}/5/58/Mary_Cassatt_-_The_Child%27s_Bath_-_Google_Art_Project.jpg` },
      { section: 'sorolla', name: 'Global Impressionists', info: 'Sorolla, Corinth, Grabar & more', img: `${WIKI}/2/2c/Joaqu%C3%ADn_Sorolla_y_Bastida_-_Strolling_along_the_Seashore_-_Google_Art_Project.jpg` },
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
    portrait: `${WIKI}/a/a4/Claude_Monet_1899_Nadar_crop.jpg`,
    bio: `Oscar-Claude Monet is often regarded as the founder and most consistent practitioner of Impressionism.
    Born in Paris and raised in Le Havre, he was introduced to plein air painting by Eugène Boudin as a teenager.
    His lifelong obsession with capturing the effects of light led him to paint the same subjects repeatedly
    under different conditions — haystacks, poplars, Rouen Cathedral, the Thames, and finally the water garden
    at his home in Giverny, where he spent the last three decades of his life creating the monumental
    <em>Water Lilies</em> (Nymphéas) series.`,
    works: [
      { title: 'Impression, Sunrise', date: '1872', img: `${WIKI}/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg` },
      { title: 'Water Lilies (Chicago)', date: '1906', img: `${WIKI}/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Chicago.jpg` },
      { title: 'Woman with a Parasol', date: '1875', img: `${WIKI}/1/1b/Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg` },
      { title: 'The Japanese Footbridge', date: '1899', img: `${WIKI}/6/68/Claude_Monet_-_Water_Lilies_and_Japanese_Bridge_%281899%29_-_Google_Art_Project.jpg` },
      { title: 'Rouen Cathedral (Sunlight)', date: '1894', img: `${WIKI}/2/2f/Claude_Monet_-_Rouen_Cathedral%2C_Facade_%28Sunset%29.jpg` },
      { title: 'San Giorgio Maggiore at Dusk', date: '1908', img: `${WIKI}/b/b0/Claude_Monet_-_San_Giorgio_Maggiore_at_Dusk.jpg` },
    ]
  },

  renoir: {
    title: 'Pierre-Auguste Renoir',
    dates: '1841–1919',
    nationality: 'French',
    portrait: `${WIKI}/9/9a/Pierre-Auguste_Renoir_Photo.jpg`,
    bio: `Renoir was the most sensuous of the Impressionists, celebrated for his luminous, warm palette and
    his joyful depictions of Parisian social life. A porcelain painter in his youth, he brought a craftsman's
    feel for surface and decoration to his work. In the 1880s he went through a "dry" or "Ingres" period,
    tightening his drawing under the influence of classical art, before returning to a softer, more
    voluptuous style in his final decades. Despite severe rheumatoid arthritis that confined him to a
    wheelchair, he continued painting until his death.`,
    works: [
      { title: 'Dance at Le Moulin de la Galette', date: '1876', img: `${WIKI}/2/21/Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg` },
      { title: 'Luncheon of the Boating Party', date: '1881', img: `${WIKI}/8/8d/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg` },
      { title: 'Two Sisters (On the Terrace)', date: '1881', img: `${WIKI}/8/8b/Pierre-Auguste_Renoir_-_By_the_Water.jpg` },
      { title: 'La Grenouillère', date: '1869', img: `${WIKI}/3/3f/Auguste_Renoir_-_La_Grenouill%C3%A8re_-_Google_Art_Project.jpg` },
      { title: 'Girl with a Watering Can', date: '1876', img: `${WIKI}/5/58/Auguste_Renoir_-_A_Girl_with_a_Watering_Can_-_Google_Art_Project.jpg` },
    ]
  },

  degas: {
    title: 'Edgar Degas',
    dates: '1834–1917',
    nationality: 'French',
    portrait: `${WIKI}/a/a1/Edgar_Degas_self_portrait_1855.jpeg`,
    bio: `Degas is often classified among the Impressionists, though he preferred the term "Realist" and
    differed from his colleagues in significant ways. Trained in the classical tradition, he maintained
    a lifelong commitment to drawing and worked primarily in the studio rather than outdoors. His genius
    lay in his radical compositions — influenced by Japanese prints and photography — and his penetrating
    observation of movement, especially in his famous scenes of ballet dancers, racehorses, and women bathing.
    He was also an accomplished sculptor, printmaker, and photographer.`,
    works: [
      { title: 'The Dance Class', date: '1874', img: `${WIKI}/5/53/Edgar_Degas_-_The_Ballet_Class_-_Google_Art_Project.jpg` },
      { title: 'L\'Absinthe', date: '1876', img: `${WIKI}/e/e8/Edgar_Degas_-_In_a_Caf%C3%A9_-_Google_Art_Project.jpg` },
      { title: 'The Star (L\'Étoile)', date: '1878', img: `${WIKI}/thumb/f/fc/Edgar_Degas_-_L%27%C3%89toile.jpg/800px-Edgar_Degas_-_L%27%C3%89toile.jpg` },
      { title: 'Blue Dancers', date: 'c. 1899', img: `${WIKI}/0/08/Edgar_Degas_-_Blue_Dancers_-_Google_Art_Project.jpg` },
      { title: 'At the Races', date: 'c. 1877–80', img: `${WIKI}/thumb/0/02/Edgar_Degas_-_At_the_Races_-_Google_Art_Project.jpg/1280px-Edgar_Degas_-_At_the_Races_-_Google_Art_Project.jpg` },
    ]
  },

  morisot: {
    title: 'Berthe Morisot',
    dates: '1841–1895',
    nationality: 'French',
    portrait: `${WIKI}/0/05/Berthe_Morisot_by_Edma_Morisot%2C1865.jpg`,
    bio: `Berthe Morisot was one of the founding members of the Impressionist group and participated in
    seven of the eight exhibitions. Encouraged by Corot and later influenced by her brother-in-law Édouard
    Manet, she developed a distinctive style marked by loose, feathery brushwork and a delicate palette of
    whites, pastels, and silvery greens. Her subjects — domestic interiors, gardens, women and children —
    reflected her world, but her painterly freedom and compositional daring were anything but conventional.
    She was instrumental in organizing the group's exhibitions and securing critical support.`,
    works: [
      { title: 'The Cradle', date: '1872', img: `${WIKI}/5/50/Berthe_Morisot_-_The_Cradle_-_Google_Art_Project.jpg` },
      { title: 'Summer\'s Day', date: '1879', img: `${WIKI}/5/55/Berthe_Morisot_-_Jour_d%27%C3%A9t%C3%A9_-_Mus%C3%A9e_d%27arts_de_Nantes.jpg` },
      { title: 'Woman at Her Toilette', date: 'c. 1875–80', img: `${WIKI}/3/3c/Berthe_Morisot_-_Woman_at_Her_Toilette_-_Google_Art_Project.jpg` },
      { title: 'In the Garden at Maurecourt', date: '1884', img: `${WIKI}/0/04/Berthe_Morisot_-_In_the_Garden_at_Maurecourt.jpg` },
    ]
  },

  pissarro: {
    title: 'Camille Pissarro',
    dates: '1830–1903',
    nationality: 'French (born Danish West Indies)',
    portrait: `${WIKI}/7/7f/Camille_Pissarro_by_Robert_Delaunay.jpg`,
    bio: `The eldest of the Impressionists, Pissarro was the only artist to participate in all eight
    independent exhibitions and served as a mentor and unifying figure for the group. Born in the Danish
    West Indies (now the U.S. Virgin Islands), he brought a broad, cosmopolitan perspective to French
    painting. His subjects ranged from rural landscapes and peasant scenes to the bustling boulevards
    of Paris, which he painted from hotel windows in his later years. He briefly adopted Seurat's
    Pointillist technique in the 1880s before returning to his own fluid, atmospheric approach.`,
    works: [
      { title: 'Boulevard Montmartre at Night', date: '1897', img: `${WIKI}/3/39/Camille_Pissarro_-_The_Boulevard_Montmartre_at_Night_-_Google_Art_Project.jpg` },
      { title: 'The Harvest, Pontoise', date: '1881', img: `${WIKI}/4/4f/Camille_Pissarro_-_La_R%C3%A9colte%2C_Pontoise_-_Google_Art_Project.jpg` },
      { title: 'Hoar Frost', date: '1873', img: `${WIKI}/thumb/a/ab/Camille_Pissarro_%281830-1903%29_-_%27Hoar_Frost%27%2C_oil_on_canvas%2C_1873%2C_Mus%C3%A9e_d%27Orsay.jpg/1280px-Camille_Pissarro_%281830-1903%29_-_%27Hoar_Frost%27%2C_oil_on_canvas%2C_1873%2C_Mus%C3%A9e_d%27Orsay.jpg` },
      { title: 'Avenue de l\'Opéra, Sunshine', date: '1898', img: `${WIKI}/thumb/e/e4/Camille_Pissarro_-_Avenue_de_l%27Op%C3%A9ra_-_Sunshine%2C_Winter_Morning_-_Google_Art_Project.jpg/800px-Camille_Pissarro_-_Avenue_de_l%27Op%C3%A9ra_-_Sunshine%2C_Winter_Morning_-_Google_Art_Project.jpg` },
    ]
  },

  sisley: {
    title: 'Alfred Sisley',
    dates: '1839–1899',
    nationality: 'British (active in France)',
    portrait: `${WIKI}/b/bd/Renoir_-_Alfred_Sisley_-_1876.jpeg`,
    bio: `Though born in Paris to English parents, Sisley was one of the most dedicated landscape painters
    among the Impressionists. He rarely ventured beyond landscape, focusing on the countryside around
    Paris — the Seine valley, Louveciennes, Marly-le-Roi, and Moret-sur-Loing, where he spent his final
    years. His work is characterized by a delicate sensitivity to the sky, which he considered "the chief
    organ" of a landscape painting. Despite producing some of the finest Impressionist landscapes, Sisley
    struggled financially throughout his life and died in poverty.`,
    works: [
      { title: 'Flood at Port-Marly', date: '1876', img: `${WIKI}/thumb/7/70/Alfred_Sisley_-_Flood_at_Port-Marly_-_Google_Art_Project.jpg/1280px-Alfred_Sisley_-_Flood_at_Port-Marly_-_Google_Art_Project.jpg` },
      { title: 'Bridge at Villeneuve-la-Garenne', date: '1872', img: `${WIKI}/c/c9/Alfred_Sisley_-_The_Bridge_at_Villeneuve-la-Garenne_-_Google_Art_Project.jpg` },
      { title: 'Snow at Louveciennes', date: '1878', img: `${WIKI}/b/bf/Alfred_Sisley_-_Snow_at_Louveciennes_-_Google_Art_Project.jpg` },
      { title: 'Moret-sur-Loing', date: '1891', img: `${WIKI}/thumb/9/97/Alfred_Sisley_052.jpg/800px-Alfred_Sisley_052.jpg` },
    ]
  },

  caillebotte: {
    title: 'Gustave Caillebotte',
    dates: '1848–1894',
    nationality: 'French',
    portrait: `${WIKI}/4/49/G._Caillebotte_-_Autoportrait_au_chevalet.jpg`,
    bio: `A wealthy naval engineer and painter, Caillebotte occupied a unique position among the Impressionists
    as both a participant and a patron. His style combined impressionist light effects with a more precise,
    almost photographic realism and a dramatic use of perspective that anticipated cinema. He organized and
    financed several of the group's exhibitions, and his personal collection of impressionist paintings —
    bequeathed to the French state upon his death — formed the nucleus of the impressionist holdings now
    at the Musée d'Orsay.`,
    works: [
      { title: 'Paris Street; Rainy Day', date: '1877', img: `${WIKI}/d/d6/Gustave_Caillebotte_-_Jour_de_pluie_%C3%A0_Paris.jpg` },
      { title: 'The Floor Scrapers', date: '1875', img: `${WIKI}/a/a8/Gustave_Caillebotte_-_The_Floor_Planers_-_Google_Art_Project.jpg` },
      { title: 'Man at His Bath', date: '1884', img: `${WIKI}/thumb/7/72/Gustave_Caillebotte_-_Homme_au_bain.jpg/800px-Gustave_Caillebotte_-_Homme_au_bain.jpg` },
      { title: 'Le pont de l\'Europe', date: '1876', img: `${WIKI}/d/da/G._Caillebotte_-_Le_pont_de_l%27Europe.jpg` },
    ]
  },

  // ─── AMERICAN IMPRESSIONISTS ───

  cassatt: {
    title: 'Mary Cassatt',
    dates: '1844–1926',
    nationality: 'American (active in France)',
    portrait: `${WIKI}/3/36/Mary_Cassatt_-_Self-Portrait_%28c._1880%29.jpg`,
    bio: `Mary Cassatt was the only American artist to exhibit with the French Impressionists. Born in
    Pennsylvania to a prosperous family, she moved to Paris in 1866 and was invited by Degas to join
    the independent exhibitions in 1877. Her subjects — mothers and children, women at tea, scenes of
    domestic life — are rendered with a bold compositional eye strongly influenced by Japanese prints.
    She was instrumental in introducing Impressionism to American collectors, advising friends like Louisine
    Havemeyer on purchases that would ultimately enrich American museums.`,
    works: [
      { title: 'The Child\'s Bath', date: '1893', img: `${WIKI}/5/58/Mary_Cassatt_-_The_Child%27s_Bath_-_Google_Art_Project.jpg` },
      { title: 'Little Girl in a Blue Armchair', date: '1878', img: `${WIKI}/f/f4/Mary_Cassatt_-_Little_Girl_in_a_Blue_Armchair_-_Google_Art_Project.jpg` },
      { title: 'The Boating Party', date: '1893–94', img: `${WIKI}/5/55/Mary_Cassatt_-_The_Boating_Party_-_Google_Art_Project.jpg` },
      { title: 'Summertime', date: 'c. 1894', img: `${WIKI}/4/4c/Mary_Cassatt_-_Summertime_-_Google_Art_Project.jpg` },
      { title: 'Young Mother Sewing', date: '1900', img: `${WIKI}/8/86/Cassatt_Mary_Young_Mother_Sewing_1900.jpg` },
    ]
  },

  hassam: {
    title: 'Childe Hassam',
    dates: '1859–1935',
    nationality: 'American',
    portrait: `${WIKI}/3/33/Childe_Hassam_1914.jpg`,
    bio: `Frederick Childe Hassam was the leading figure of American Impressionism. After studying in
    Paris from 1886 to 1889, he returned to the United States and became a founding member of the "Ten
    American Painters," a group that seceded from the Society of American Artists to exhibit impressionist
    work. Hassam is best known for his vibrant urban scenes of New York and Boston, his sun-drenched views
    of the New England coast, and his celebrated Flag series, depicting Fifth Avenue draped in Allied flags
    during World War I. He was enormously prolific, producing over 3,000 paintings, watercolors, and prints.`,
    works: [
      { title: 'Allies Day, May 1917', date: '1917', img: `${WIKI}/1/11/Hassam_-_Allies_Day%2C_May_1917.jpg` },
      { title: 'The Room of Flowers', date: '1894', img: `${WIKI}/f/f3/Childe_Hassam_-_The_Room_of_Flowers.jpg` },
      { title: 'Boston Common at Twilight', date: '1885–86', img: `${WIKI}/a/a1/Childe_Hassam_-_Boston_Common_at_Twilight_-_Google_Art_Project.jpg` },
      { title: 'Isle of Shoals Garden', date: '1892', img: `${WIKI}/thumb/d/d8/Hassam_-_Celia%27s_garden.jpg/800px-Hassam_-_Celia%27s_garden.jpg` },
    ]
  },

  robinson: {
    title: 'Theodore Robinson',
    dates: '1852–1896',
    nationality: 'American',
    portrait: `${WIKI}/0/09/Theodore_Robinson_photo.jpg`,
    bio: `Theodore Robinson was one of the first American painters to adopt Impressionism after befriending
    Claude Monet at Giverny in the late 1880s. His work blends impressionist light and color with a
    structured, tonal approach that reflects his American training. Robinson spent several summers at
    Giverny between 1887 and 1892, painting the village, its inhabitants, and the surrounding countryside
    with a quiet, contemplative sensibility. He returned to the United States in 1892 and spent his
    remaining years painting in Vermont, New Jersey, and New York before his early death at forty-three.`,
    works: [
      { title: 'The Wedding March', date: '1892', img: `${WIKI}/b/b1/Theodore_Robinson_-_The_Wedding_March.jpg` },
      { title: 'Port Ben, Delaware and Hudson Canal', date: '1893', img: `${WIKI}/5/5c/Theodore_Robinson_-_Port_Ben%2C_Delaware_and_Hudson_Canal_-_Google_Art_Project.jpg` },
      { title: 'La Débâcle', date: '1892', img: `${WIKI}/8/86/Theodore_Robinson_-_La_D%C3%A9b%C3%A2cle_%281892%29.jpg` },
    ]
  },

  twachtman: {
    title: 'John Henry Twachtman',
    dates: '1853–1902',
    nationality: 'American',
    portrait: `${WIKI}/c/c6/John_Henry_Twachtman.jpg`,
    bio: `Twachtman was one of the most lyrical and experimental of the American Impressionists. Trained
    in Munich and later in Paris under the academic painter Jules Lefebvre, he evolved through several
    styles before arriving at a highly personal form of Impressionism characterized by subtle tonal
    harmonies, near-abstract compositions, and an intimate connection to landscape. His paintings of
    his property at Horseneck Falls in Greenwich, Connecticut — its brook, waterfall, garden, and
    surrounding woods in every season — are among the finest achievements of American Impressionism.`,
    works: [
      { title: 'Horseneck Falls', date: 'c. 1889–1900', img: `${WIKI}/6/66/John_Henry_Twachtman_-_Horseneck_Falls.jpg` },
      { title: 'Icebound', date: 'c. 1889', img: `${WIKI}/8/8d/John_Henry_Twachtman_-_Icebound_-_Google_Art_Project.jpg` },
      { title: 'Niagara Falls', date: 'c. 1894', img: `${WIKI}/thumb/9/97/Twachtman_Niagara_Falls.jpg/1024px-Twachtman_Niagara_Falls.jpg` },
    ]
  },

  weir: {
    title: 'J. Alden Weir',
    dates: '1852–1919',
    nationality: 'American',
    portrait: `${WIKI}/4/4b/J._Alden_Weir_photograph.jpg`,
    bio: `Julian Alden Weir was a founding member of the Ten American Painters and one of the leading
    figures in bringing Impressionism to the United States. Initially resistant to the movement — he
    called the Third Impressionist Exhibition "worse than the Chamber of Horrors" after visiting Paris
    in 1877 — he gradually adopted impressionist techniques during the 1880s. His mature work is
    characterized by a gentle, silvery palette and a contemplative approach to landscape and figure
    painting, particularly scenes of his Connecticut farm.`,
    works: [
      { title: 'The Red Bridge', date: '1895', img: `${WIKI}/3/38/J._Alden_Weir_-_The_Red_Bridge_-_Google_Art_Project.jpg` },
      { title: 'In the Sun', date: '1899', img: `${WIKI}/6/6e/J._Alden_Weir_-_In_the_Sun.jpg` },
      { title: 'The Factory Village', date: '1897', img: `${WIKI}/3/30/Julian_Alden_Weir_-_The_Factory_Village_-_Google_Art_Project.jpg` },
    ]
  },

  // ─── GLOBAL IMPRESSIONISTS ───

  sorolla: {
    title: 'Joaquín Sorolla',
    dates: '1863–1923',
    nationality: 'Spanish',
    portrait: `${WIKI}/d/d7/Joaqu%C3%ADn_Sorolla_Photo.jpg`,
    bio: `Joaquín Sorolla y Bastida is Spain's greatest Impressionist and one of the most accomplished
    painters of light in the history of art. Born in Valencia, he studied in Rome and Paris before
    developing a luminous, large-scale plein air style that captured the intense Mediterranean light
    of the Spanish coast. His beach scenes — children playing in the surf, fishermen hauling boats,
    women in white dresses walking along the shore — shimmer with reflected sunlight and shadow. In
    1911, the Hispanic Society of America commissioned him to paint a monumental series of fourteen
    murals depicting the regions of Spain, a project that consumed his final productive years.`,
    works: [
      { title: 'Walk on the Beach', date: '1909', img: `${WIKI}/2/2c/Joaqu%C3%ADn_Sorolla_y_Bastida_-_Strolling_along_the_Seashore_-_Google_Art_Project.jpg` },
      { title: 'Boys on the Beach', date: '1910', img: `${WIKI}/a/a2/Joaqu%C3%ADn_Sorolla_y_Bastida_-_Boys_on_the_Beach_-_Google_Art_Project.jpg` },
      { title: 'Sewing the Sail', date: '1896', img: `${WIKI}/f/f5/Joaqu%C3%ADn_Sorolla_y_Bastida_-_Sewing_the_Sail_-_Google_Art_Project.jpg` },
      { title: 'The Horse\'s Bath', date: '1909', img: `${WIKI}/5/5c/Joaquin_Sorolla_-_El_ba%C3%B1o_del_caballo.jpg` },
      { title: 'My Wife and Daughters in the Garden', date: '1910', img: `${WIKI}/1/18/Joaqu%C3%ADn_Sorolla_-_My_Wife_and_Daughters_in_the_Garden%2C_1910_-_Google_Art_Project.jpg` },
    ]
  },

  corinth: {
    title: 'Lovis Corinth',
    dates: '1858–1925',
    nationality: 'German',
    portrait: `${WIKI}/f/f4/Lovis_Corinth_Selbstportr%C3%A4t_1896.jpg`,
    bio: `Lovis Corinth bridged Impressionism and Expressionism in German art. Trained in Munich and Paris,
    he became a leading figure of the Berlin Secession, a progressive artists' association. His early
    work combined impressionist brushwork with vigorous realism. After suffering a stroke in 1911, his
    style became increasingly free and emotionally intense, anticipating Expressionism. His late landscapes
    of the Walchensee in Bavaria are among the great achievements of early twentieth-century painting —
    turbulent, deeply felt, and brilliantly colored.`,
    works: [
      { title: 'Walchensee, Panorama', date: '1924', img: `${WIKI}/9/99/Lovis_Corinth_-_Walchensee%2C_Panorama_-_Google_Art_Project.jpg` },
      { title: 'Self-Portrait with Skeleton', date: '1896', img: `${WIKI}/f/f4/Lovis_Corinth_Selbstportr%C3%A4t_1896.jpg` },
      { title: 'Easter at Walchensee', date: '1922', img: `${WIKI}/thumb/e/e1/Lovis_Corinth_BC_47.jpg/800px-Lovis_Corinth_BC_47.jpg` },
    ]
  },

  grabar: {
    title: 'Igor Grabar',
    dates: '1871–1960',
    nationality: 'Russian',
    portrait: `${WIKI}/thumb/b/be/Grabar_portret.jpg/440px-Grabar_portret.jpg`,
    bio: `Igor Grabar was the leading Russian Impressionist and a towering figure in Russian cultural
    life as a painter, art historian, museum director, and restorer. After studying in Munich under
    Anton Ažbe, he brought impressionist and post-impressionist techniques to Russian landscape painting.
    His winter scenes — birch trees in hoarfrost, blue shadows on snow — capture the crystalline light
    of the Russian countryside with a vibrancy that earned him comparison to Monet. He later directed
    the Tretyakov Gallery and led major art restoration campaigns across the Soviet Union.`,
    works: [
      { title: 'February Azure', date: '1904', img: `${WIKI}/8/80/Grabar_Febr_Azure.jpg` },
      { title: 'March Snow', date: '1904', img: `${WIKI}/5/5c/Grabar_March_Snow.jpg` },
      { title: 'Winter Morning', date: '1907', img: `${WIKI}/thumb/8/80/Grabar_Winter_Morning.jpg/800px-Grabar_Winter_Morning.jpg` },
    ]
  },

  kroyer: {
    title: 'P.S. Krøyer',
    dates: '1851–1909',
    nationality: 'Danish (born Norway)',
    portrait: `${WIKI}/a/a7/P.S._Kr%C3%B8yer_-_Selvportrait_-_Skagens_Museum.jpg`,
    bio: `Peder Severin Krøyer was the central figure of the Skagen Painters, a colony of Scandinavian
    artists who gathered at the northernmost tip of Denmark where the North Sea meets the Baltic. After
    studying in Paris under Léon Bonnat, Krøyer brought impressionist techniques to the extraordinary
    light of the Danish summer — the pale, luminous "blue hour" of Scandinavian evenings became his
    signature subject. His beach scenes, depicting artists, fishermen, and elegant strollers in the
    long twilight, are among the most beloved images in Scandinavian art.`,
    works: [
      { title: 'Summer Evening on Skagen\'s Beach', date: '1899', img: `${WIKI}/a/a8/P.S._Kr%C3%B8yer_-_Summer_evening_on_Skagen%27s_Beach._Anna_Ancher_and_Marie_Kr%C3%B8yer_walking_together._-_Google_Art_Project.jpg` },
      { title: 'Hip, Hip, Hurrah!', date: '1888', img: `${WIKI}/d/d1/Peter_Severin_Kr%C3%B8yer_-_Hip_Hip_Hurrah%21_Artist_Festival_at_Skagen_-_Google_Art_Project.jpg` },
      { title: 'Summer Evening at Skagen (The Artist\'s Wife)', date: '1892', img: `${WIKI}/thumb/6/6c/Peder_Severin_Kr%C3%B8yer_-_Summer_evening_at_Skagen._The_artist%27s_wife_and_dog_by_the_shore_-_Google_Art_Project.jpg/800px-Peder_Severin_Kr%C3%B8yer_-_Summer_evening_at_Skagen._The_artist%27s_wife_and_dog_by_the_shore_-_Google_Art_Project.jpg` },
    ]
  },

  streeton: {
    title: 'Arthur Streeton',
    dates: '1867–1943',
    nationality: 'Australian',
    portrait: `${WIKI}/thumb/6/6a/Tom_Roberts_-_Arthur_Streeton_%28sketch%29.jpg/440px-Tom_Roberts_-_Arthur_Streeton_%28sketch%29.jpg`,
    bio: `Arthur Streeton was the most celebrated landscape painter of the Australian Impressionists
    (also known as the Heidelberg School). Working alongside Tom Roberts, Charles Conder, and Frederick
    McCubbin around Melbourne in the late 1880s, Streeton developed a luminous, high-keyed palette
    uniquely suited to the intense light, golden grasslands, and blue distances of the Australian bush.
    His panoramic canvases captured an emerging national identity, and works like <em>Golden Summer,
    Eaglemont</em> became icons of Australian art. He later spent years in England and served as a war
    artist in World War I before returning to Australia.`,
    works: [
      { title: 'Golden Summer, Eaglemont', date: '1889', img: `${WIKI}/7/72/%27Golden_Summer%2C_Eaglemont%27_by_Arthur_Streeton%2C_1889.jpg` },
      { title: 'Fire\'s On', date: '1891', img: `${WIKI}/6/6d/Arthur_Streeton_-_Fire%27s_on_-_Google_Art_Project.jpg` },
      { title: 'Still Glides the Stream', date: '1890', img: `${WIKI}/thumb/2/29/Arthur_Streeton_-_%27Still_glides_the_stream%2C_and_shall_for_ever_glide%27_-_Google_Art_Project.jpg/1280px-Arthur_Streeton_-_%27Still_glides_the_stream%2C_and_shall_for_ever_glide%27_-_Google_Art_Project.jpg` },
    ]
  },
};
