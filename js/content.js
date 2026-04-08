// ============================================
// Content data for Impressionism website
// All images: Wikimedia Commons (public domain)
// ============================================

// Use Special:FilePath for reliable redirects — no hash path needed
function wikiImg(filename, width) {
  const w = width || 800;
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=${w}`;
}

const CONTENT = {

  // ─── HOME / OVERVIEW ───
  home: {
    title: 'American Impressionism',
    meta: 'Five painters who brought the light of France to the American landscape',
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

      <h2 class="section-title">The Five Artists</h2>
    `,
    cards: [
      { section: 'cassatt', name: 'Mary Cassatt', info: '1844–1926 · Philadelphia', img: wikiImg('Mary Cassatt - The Child\'s Bath - Google Art Project.jpg') },
      { section: 'hassam', name: 'Childe Hassam', info: '1859–1935 · Boston', img: wikiImg('Childe Hassam - Washington Arch, Spring - Google Art Project.jpg') },
      { section: 'robinson', name: 'Theodore Robinson', info: '1852–1896 · Vermont', img: wikiImg('Theodore Robinson - The Wedding March.jpg') },
      { section: 'twachtman', name: 'John Henry Twachtman', info: '1853–1902 · Cincinnati', img: wikiImg('John Henry Twachtman - Icebound - Google Art Project.jpg') },
      { section: 'weir', name: 'J. Alden Weir', info: '1852–1919 · Connecticut', img: wikiImg('Julian Alden Weir - The Factory Village - Google Art Project.jpg') },
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

};
