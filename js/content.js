// ============================================
// Content data for Impressionism website
// All images: Wikimedia Commons (public domain)
// ============================================

// Build Wikimedia Commons thumbnail URL via thumb.php (more reliable than Special:FilePath)
function wikiImg(filename, width) {
  const w = width || 800;
  return `https://commons.wikimedia.org/w/thumb.php?f=${encodeURIComponent(filename)}&w=${w}`;
}

// Fallback URL without thumbnail (full-size via Special:FilePath)
function wikiImgFallback(filename) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}`;
}

const CONTENT = {

  // ─── HOME / OVERVIEW ───
  home: {
    title: 'Impressionism: A Global Survey',
    meta: 'An exploration of the movement, its artists, and their enduring works',
    heroImg: wikiImg('Claude Monet, Impression, soleil levant.jpg', 1200),
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
      { section: 'monet', name: 'French Impressionists', info: 'Monet, Renoir, Degas, Morisot & more', img: wikiImg('Claude Monet - Water Lilies - 1906, Chicago.jpg') },
      { section: 'cassatt', name: 'American Impressionists', info: 'Cassatt, Hassam, Robinson & more', img: wikiImg('Mary Cassatt - The Child\'s Bath - Google Art Project.jpg') },
      { section: 'sorolla', name: 'Global Impressionists', info: 'Sorolla, Corinth, Grabar & more', img: wikiImg('Joaquín Sorolla y Bastida - Strolling along the Seashore - Google Art Project.jpg') },
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
      { title: 'Impression, Sunrise', date: '1872', img: wikiImg('Claude Monet, Impression, soleil levant.jpg') },
      { title: 'Water Lilies (Chicago)', date: '1906', img: wikiImg('Claude Monet - Water Lilies - 1906, Chicago.jpg') },
      { title: 'Woman with a Parasol', date: '1875', img: wikiImg('Claude Monet - Woman with a Parasol - Madame Monet and Her Son - Google Art Project.jpg') },
      { title: 'The Japanese Footbridge', date: '1899', img: wikiImg('Claude Monet - Water Lilies and Japanese Bridge.jpg') },
      { title: 'Rouen Cathedral (Sunlight)', date: '1894', img: wikiImg('Claude Monet - Rouen Cathedral, Facade (Sunset).JPG') },
      { title: 'San Giorgio Maggiore at Dusk', date: '1908', img: wikiImg('Claude Monet, Saint-Georges majeur au crépuscule.jpg') },
      { title: 'The Thames below Westminster', date: '1871', img: wikiImg('Claude Monet - The Thames below Westminster.jpg') },
      { title: 'Haystacks (End of Summer)', date: '1891', img: wikiImg('Claude Monet - Meules - Google Art Project.jpg') },
      { title: 'Poplars on the Epte', date: '1891', img: wikiImg('Claude Monet - Poplars on the Epte - Google Art Project.jpg') },
      { title: 'The Magpie', date: '1869', img: wikiImg('Claude Monet - The Magpie - Google Art Project.jpg') },
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
      { title: 'Dance at Le Moulin de la Galette', date: '1876', img: wikiImg('Pierre-Auguste Renoir, Le Moulin de la Galette.jpg') },
      { title: 'Luncheon of the Boating Party', date: '1881', img: wikiImg('Pierre-Auguste Renoir - Luncheon of the Boating Party - Google Art Project.jpg') },
      { title: 'La Grenouillère', date: '1869', img: wikiImg('Auguste Renoir - La Grenouillère - Google Art Project.jpg') },
      { title: 'Girl with a Watering Can', date: '1876', img: wikiImg('Auguste Renoir - A Girl with a Watering Can - Google Art Project.jpg') },
      { title: 'Dance at Bougival', date: '1883', img: wikiImg('Pierre-Auguste Renoir - Suzanne Valadon - Dance at Bougival.jpg') },
      { title: 'Two Sisters (On the Terrace)', date: '1881', img: wikiImg('Pierre-Auguste Renoir - Two Sisters (On the Terrace) - Google Art Project.jpg') },
      { title: 'The Swing', date: '1876', img: wikiImg('Pierre-Auguste Renoir - The Swing - Google Art Project.jpg') },
      { title: 'By the Seashore', date: '1883', img: wikiImg('Pierre-Auguste Renoir - By the Seashore - Google Art Project.jpg') },
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
      { title: 'The Dance Class', date: '1874', img: wikiImg('Edgar Degas - The Ballet Class - Google Art Project.jpg') },
      { title: 'L\'Absinthe', date: '1876', img: wikiImg('Edgar Degas - In a Café - Google Art Project.jpg') },
      { title: 'The Star (L\'Étoile)', date: '1878', img: wikiImg('Edgar Degas - L\'Étoile.jpg') },
      { title: 'Blue Dancers', date: 'c. 1899', img: wikiImg('Edgar Degas - Blue Dancers - Google Art Project.jpg') },
      { title: 'The Dance Foyer at the Opera', date: '1872', img: wikiImg('Edgar Degas - The Dance Foyer at the Opera on the rue Le Peletier - Google Art Project.jpg') },
      { title: 'At the Races', date: '1877–80', img: wikiImg('Edgar Degas - At the Races - Google Art Project.jpg') },
      { title: 'The Tub', date: '1886', img: wikiImg('Edgar Degas - The Tub - Google Art Project.jpg') },
      { title: 'Cotton Exchange, New Orleans', date: '1873', img: wikiImg('Edgar Degas - A Cotton Office in New Orleans - Google Art Project.jpg') },
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
      { title: 'The Cradle', date: '1872', img: wikiImg('Berthe Morisot - The Cradle - Google Art Project.jpg') },
      { title: 'Summer\'s Day', date: '1879', img: wikiImg('Berthe Morisot - Jour d\'été - Musée d\'arts de Nantes.jpg') },
      { title: 'Woman at Her Toilette', date: 'c. 1875–80', img: wikiImg('Berthe Morisot - Woman at Her Toilette - Google Art Project.jpg') },
      { title: 'In the Garden at Maurecourt', date: '1884', img: wikiImg('Berthe Morisot - In the Garden at Maurecourt.jpg') },
      { title: 'The Butterfly Hunt', date: '1874', img: wikiImg('Berthe Morisot - The Butterfly Hunt - Google Art Project.jpg') },
      { title: 'Young Girl by the Window', date: '1878', img: wikiImg('Berthe Morisot - Young Girl by the Window - Google Art Project.jpg') },
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
      { title: 'Boulevard Montmartre at Night', date: '1897', img: wikiImg('Camille Pissarro - The Boulevard Montmartre at Night - Google Art Project.jpg') },
      { title: 'The Harvest, Pontoise', date: '1881', img: wikiImg('Camille Pissarro - La Récolte, Pontoise - Google Art Project.jpg') },
      { title: 'The Boulevard Montmartre, Winter Morning', date: '1897', img: wikiImg('The Boulevard Montmartre on a Winter Morning.JPG') },
      { title: 'Avenue de l\'Opéra, Sunshine', date: '1898', img: wikiImg('Camille Pissarro - Avenue de l\'Opéra - Sunshine, Winter Morning - Google Art Project.jpg') },
      { title: 'Red Roofs', date: '1877', img: wikiImg('Camille Pissarro - Lordship Lane Station - Google Art Project.jpg') },
      { title: 'The Côte des Bœufs at L\'Hermitage', date: '1877', img: wikiImg('Camille Pissarro - La Côte des Bœufs à l\'Hermitage - Google Art Project.jpg') },
      { title: 'The Garden of the Tuileries on a Winter Afternoon', date: '1899', img: wikiImg('Camille Pissarro - The Garden of the Tuileries on a Winter Afternoon - Google Art Project.jpg') },
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
      { title: 'Flood at Port-Marly', date: '1876', img: wikiImg('Alfred Sisley - Flood at Port-Marly - Google Art Project.jpg') },
      { title: 'Bridge at Villeneuve-la-Garenne', date: '1872', img: wikiImg('Alfred Sisley - The Bridge at Villeneuve-la-Garenne - Google Art Project.jpg') },
      { title: 'Snow at Louveciennes', date: '1878', img: wikiImg('Alfred Sisley - Snow at Louveciennes - Google Art Project.jpg') },
      { title: 'The Lane of Poplars at Moret', date: '1890', img: wikiImg('Alfred Sisley 044.jpg') },
      { title: 'Molesey Weir, Hampton Court', date: '1874', img: wikiImg('Alfred Sisley - Molesey Weir, Hampton Court - Google Art Project.jpg') },
      { title: 'The Terrace at Saint-Germain', date: '1875', img: wikiImg('Alfred Sisley - The Terrace at Saint-Germain, Spring - Google Art Project.jpg') },
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
      { title: 'Paris Street; Rainy Day', date: '1877', img: wikiImg('Gustave Caillebotte - Jour de pluie à Paris.jpg') },
      { title: 'The Floor Scrapers', date: '1875', img: wikiImg('Gustave Caillebotte - The Floor Planers - Google Art Project.jpg') },
      { title: 'Man at His Bath', date: '1884', img: wikiImg('Gustave Caillebotte - Homme au bain.jpg') },
      { title: 'Le pont de l\'Europe', date: '1876', img: wikiImg('G. Caillebotte - Le pont de l\'Europe.jpg') },
      { title: 'Oarsmen on the Yerres', date: '1877', img: wikiImg('Gustave Caillebotte - Périssoires sur l\'Yerres - Google Art Project.jpg') },
      { title: 'Young Man at His Window', date: '1876', img: wikiImg('Gustave Caillebotte - Young Man at His Window - Google Art Project.jpg') },
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
      { title: 'The Child\'s Bath', date: '1893', img: wikiImg('Mary Cassatt - The Child\'s Bath - Google Art Project.jpg') },
      { title: 'Little Girl in a Blue Armchair', date: '1878', img: wikiImg('Mary Cassatt - Little Girl in a Blue Armchair - Google Art Project.jpg') },
      { title: 'The Boating Party', date: '1893–94', img: wikiImg('Mary Cassatt - The Boating Party - Google Art Project.jpg') },
      { title: 'Summertime', date: 'c. 1894', img: wikiImg('Mary Cassatt - Summertime - Google Art Project.jpg') },
      { title: 'Young Mother Sewing', date: '1900', img: wikiImg('Cassatt Mary Young Mother Sewing 1900.jpg') },
      { title: 'In the Loge', date: '1878', img: wikiImg('Mary Cassatt - In the Loge - Google Art Project.jpg') },
      { title: 'The Letter', date: '1891', img: wikiImg('Mary Cassatt - The Letter - Google Art Project.jpg') },
      { title: 'Mother and Child', date: '1905', img: wikiImg('Mary Cassatt - Mother and Child - Google Art Project.jpg') },
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
      { title: 'Allies Day, May 1917', date: '1917', img: wikiImg('Hassam - Allies Day, May 1917.jpg') },
      { title: 'The Room of Flowers', date: '1894', img: wikiImg('Childe Hassam - The Room of Flowers.jpg') },
      { title: 'Boston Common at Twilight', date: '1885–86', img: wikiImg('Childe Hassam, \'Boston Common at Twilight\', 1885–86.jpg') },
      { title: 'Celia Thaxter\'s Garden', date: '1892', img: wikiImg('Celia Thaxter in Her Garden by Childe Hassam.JPG') },
      { title: 'Washington Arch, Spring', date: '1890', img: wikiImg('Childe Hassam - Washington Arch, Spring - Google Art Project.jpg') },
      { title: 'Champs Élysées, Paris', date: '1889', img: wikiImg('Childe Hassam - Champs Elysées, Paris.JPG') },
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
      { title: 'The Wedding March', date: '1892', img: wikiImg('Theodore Robinson - The Wedding March.jpg') },
      { title: 'Port Ben, Delaware and Hudson Canal', date: '1893', img: wikiImg('Theodore Robinson - Port Ben, Delaware and Hudson Canal - Google Art Project.jpg') },
      { title: 'A Bird\'s-Eye View', date: '1889', img: wikiImg('Robinson A Bird\'s-Eye View.jpg') },
      { title: 'In the Orchard', date: '1891', img: wikiImg('Theodore Robinson - In the Orchard - Google Art Project.jpg') },
      { title: 'La Vachère', date: '1888', img: wikiImg('Theodore Robinson - La Vachère - Google Art Project.jpg') },
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
      { title: 'Horseneck Falls', date: 'c. 1889–1900', img: wikiImg('Horseneck Falls MET DP161232.jpg') },
      { title: 'Icebound', date: 'c. 1889', img: wikiImg('John Henry Twachtman - Icebound - Google Art Project.jpg') },
      { title: 'Niagara Falls', date: 'c. 1894', img: wikiImg('John Henry Twachtman - Niagara Falls - 1929.6.142 - Smithsonian American Art Museum.jpg') },
      { title: 'Niagara in Winter', date: 'c. 1893', img: wikiImg('Niagara in Winter by John Henry Twachtman, c. 1893, oil on canvas - New Britain Museum of American Art - DSC09580.JPG') },
      { title: 'The White Bridge', date: 'c. 1900', img: wikiImg('John Henry Twachtman - The White Bridge - Google Art Project.jpg') },
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
      { title: 'The Red Bridge', date: '1895', img: wikiImg('J. Alden Weir - The Red Bridge - Google Art Project.jpg') },
      { title: 'In the Sun', date: '1899', img: wikiImg('J. Alden Weir - In the Sun.jpg') },
      { title: 'The Factory Village', date: '1897', img: wikiImg('Julian Alden Weir - The Factory Village - Google Art Project.jpg') },
      { title: 'Midday Rest in New England', date: '1897', img: wikiImg('Julian Alden Weir - Midday Rest in New England - Google Art Project.jpg') },
      { title: 'The Ice Cutters', date: 'c. 1890', img: wikiImg('Julian Alden Weir - The Ice Cutters - Google Art Project.jpg') },
    ]
  },

  // ─── GLOBAL IMPRESSIONISTS ───

  sorolla: {
    title: 'Joaquín Sorolla',
    dates: '1863–1923',
    nationality: 'Spanish',
    portrait: wikiImg('Joaquin Sorolla by Gertrude Käsebier, 1908.jpg'),
    bio: `Joaquín Sorolla y Bastida is Spain's greatest Impressionist and one of the most accomplished
    painters of light in the history of art. Born in Valencia, he studied in Rome and Paris before
    developing a luminous, large-scale plein air style that captured the intense Mediterranean light
    of the Spanish coast. His beach scenes — children playing in the surf, fishermen hauling boats,
    women in white dresses walking along the shore — shimmer with reflected sunlight and shadow. In
    1911, the Hispanic Society of America commissioned him to paint a monumental series of fourteen
    murals depicting the regions of Spain, a project that consumed his final productive years.`,
    works: [
      { title: 'Walk on the Beach', date: '1909', img: wikiImg('Joaquín Sorolla y Bastida - Strolling along the Seashore - Google Art Project.jpg') },
      { title: 'Boys on the Beach', date: '1910', img: wikiImg('Joaquín Sorolla y Bastida - Boys on the Beach - Google Art Project.jpg') },
      { title: 'Sewing the Sail', date: '1896', img: wikiImg('Joaquín Sorolla y Bastida - Sewing the Sail - Google Art Project.jpg') },
      { title: 'The Horse\'s Bath', date: '1909', img: wikiImg('Joaquin Sorolla - El baño del caballo.jpg') },
      { title: 'My Wife and Daughters in the Garden', date: '1910', img: wikiImg('Joaquín Sorolla - My Wife and Daughters in the Garden, 1910 - Google Art Project.jpg') },
      { title: 'Beach at Valencia', date: '1908', img: wikiImg('Joaquin Sorolla, 1908 - Beach of Valencia by Morning Light.jpg') },
      { title: 'Children on the Beach', date: '1910', img: wikiImg('Joaquín Sorolla y Bastida - Children at the Beach (Javea) - Google Art Project.jpg') },
    ]
  },

  corinth: {
    title: 'Lovis Corinth',
    dates: '1858–1925',
    nationality: 'German',
    portrait: wikiImg('Lovis Corinth Selbstporträt 1896.jpg'),
    bio: `Lovis Corinth bridged Impressionism and Expressionism in German art. Trained in Munich and Paris,
    he became a leading figure of the Berlin Secession, a progressive artists' association. His early
    work combined impressionist brushwork with vigorous realism. After suffering a stroke in 1911, his
    style became increasingly free and emotionally intense, anticipating Expressionism. His late landscapes
    of the Walchensee in Bavaria are among the great achievements of early twentieth-century painting —
    turbulent, deeply felt, and brilliantly colored.`,
    works: [
      { title: 'Walchensee, Panorama', date: '1924', img: wikiImg('Lovis Corinth - Walchensee, Panorama - Google Art Project.jpg') },
      { title: 'Self-Portrait with Skeleton', date: '1896', img: wikiImg('Lovis Corinth Selbstporträt 1896.jpg') },
      { title: 'Easter at Walchensee', date: '1922', img: wikiImg('Lovis Corinth Ostern am Walchensee 1922.jpg') },
      { title: 'The Deposition', date: '1895', img: wikiImg('Lovis Corinth - Pieta - Google Art Project.jpg') },
      { title: 'Slaughterhouse', date: '1893', img: wikiImg('Lovis Corinth - Schlachthaus - Google Art Project.jpg') },
    ]
  },

  grabar: {
    title: 'Igor Grabar',
    dates: '1871–1960',
    nationality: 'Russian',
    portrait: wikiImg('Grabar February azure 1904 gtg.jpg'),
    bio: `Igor Grabar was the leading Russian Impressionist and a towering figure in Russian cultural
    life as a painter, art historian, museum director, and restorer. After studying in Munich under
    Anton Ažbe, he brought impressionist and post-impressionist techniques to Russian landscape painting.
    His winter scenes — birch trees in hoarfrost, blue shadows on snow — capture the crystalline light
    of the Russian countryside with a vibrancy that earned him comparison to Monet. He later directed
    the Tretyakov Gallery and led major art restoration campaigns across the Soviet Union.`,
    works: [
      { title: 'February Azure', date: '1904', img: wikiImg('Grabar February azure 1904 gtg.jpg') },
      { title: 'March Snow', date: '1904', img: wikiImg('Snow in March by Igor Grabar, 1904.jpg') },
      { title: 'The Frost', date: '1905', img: wikiImg('The Frost by Igor Grabar, 1905.jpg') },
      { title: 'Untouched Snow', date: '1904', img: wikiImg('Grabar February azure study 1904 nhmrb.jpg') },
    ]
  },

  kroyer: {
    title: 'P.S. Krøyer',
    dates: '1851–1909',
    nationality: 'Danish (born Norway)',
    portrait: wikiImg('P.S. Krøyer - Selvportrait - Skagens Museum.jpg'),
    bio: `Peder Severin Krøyer was the central figure of the Skagen Painters, a colony of Scandinavian
    artists who gathered at the northernmost tip of Denmark where the North Sea meets the Baltic. After
    studying in Paris under Léon Bonnat, Krøyer brought impressionist techniques to the extraordinary
    light of the Danish summer — the pale, luminous "blue hour" of Scandinavian evenings became his
    signature subject. His beach scenes, depicting artists, fishermen, and elegant strollers in the
    long twilight, are among the most beloved images in Scandinavian art.`,
    works: [
      { title: 'Summer Evening on Skagen\'s Beach', date: '1899', img: wikiImg('P.S. Krøyer - Summer evening on Skagen\'s Beach. Anna Ancher and Marie Krøyer walking together. - Google Art Project.jpg') },
      { title: 'Hip, Hip, Hurrah!', date: '1888', img: wikiImg('Peter Severin Krøyer - Hip Hip Hurrah! Artist Festival at Skagen - Google Art Project.jpg') },
      { title: 'Summer Evening at Skagen', date: '1892', img: wikiImg('Peder Severin Krøyer - Summer evening at Skagen. The artist\'s wife and dog by the shore - Google Art Project.jpg') },
      { title: 'Fishermen on Skagen\'s Beach', date: '1883', img: wikiImg('Peder Severin Krøyer - Fishermen on Skagen\'s North Beach - Google Art Project.jpg') },
      { title: 'Marie Krøyer on the Beach', date: '1893', img: wikiImg('P.S. Krøyer - Marie Krøyer painting on Skagen\'s Beach - Google Art Project.jpg') },
    ]
  },

  streeton: {
    title: 'Arthur Streeton',
    dates: '1867–1943',
    nationality: 'Australian',
    portrait: wikiImg('Tom Roberts - Arthur Streeton (sketch).jpg'),
    bio: `Arthur Streeton was the most celebrated landscape painter of the Australian Impressionists
    (also known as the Heidelberg School). Working alongside Tom Roberts, Charles Conder, and Frederick
    McCubbin around Melbourne in the late 1880s, Streeton developed a luminous, high-keyed palette
    uniquely suited to the intense light, golden grasslands, and blue distances of the Australian bush.
    His panoramic canvases captured an emerging national identity, and works like <em>Golden Summer,
    Eaglemont</em> became icons of Australian art. He later spent years in England and served as a war
    artist in World War I before returning to Australia.`,
    works: [
      { title: 'Golden Summer, Eaglemont', date: '1889', img: wikiImg('\'Golden Summer, Eaglemont\' by Arthur Streeton, 1889.jpg') },
      { title: 'Fire\'s On', date: '1891', img: wikiImg('Arthur Streeton - Fire\'s on - Google Art Project.jpg') },
      { title: 'Still Glides the Stream', date: '1890', img: wikiImg('Arthur Streeton - \'Still glides the stream, and shall for ever glide\' - Google Art Project.jpg') },
      { title: 'The Purple Noon\'s Transparent Might', date: '1896', img: wikiImg('Arthur Streeton - The purple noon\'s transparent might - Google Art Project.jpg') },
      { title: 'Near Heidelberg', date: '1890', img: wikiImg('Arthur Streeton - Near Heidelberg - Google Art Project.jpg') },
    ]
  },
};
