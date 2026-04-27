import "./index.css";

function App() {
  return (
    <>
      {/* Wrapper for the converted HTML */}
      <div className="top-strip">
    <div className="wrap">
      <span>1300 659 830</span>
      <span>sales@formdirect.com.au</span>
    </div>
  </div>

  <header className="site-header">
    <div className="wrap">
      <div className="brand" aria-label="Form Direct">
        <span className="brand-mark">FD</span>
        <span>Form Direct</span>
      </div>
      <nav className="nav" aria-label="Primary navigation">
        <a href="#">Formwork</a>
        <a href="#">Reinforcing</a>
        <a href="#">Environmental</a>
        <a href="#">Projects</a>
        <a href="#">Blogs</a>
        <a className="button" href="#">Customer Portal</a>
      </nav>
    </div>
  </header>

  <section className="hero">
    <div className="wrap hero-inner">
      <div>
        <p className="eyebrow">Environmental / Erosion control</p>
        <h1>How Does Soil Erosion Affect the Environment?</h1>
        <p className="hero-copy">Civil works can move soil before a site looks damaged. This guide shows how exposed ground becomes downstream sediment, habitat pressure, drainage risk, and a business issue.</p>
        <a className="button" href="https://formdirect.com.au/enviro/erosion-control/">Explore erosion control products</a>
      </div>
      <aside className="hero-panel" aria-label="Article summary">
        <div className="hero-panel-header">At a glance</div>
        <div className="hero-panel-body">
          <div className="metric">
            <strong>01</strong>
            <span>Sediment can leave cleared, graded, excavated, or traffic-damaged ground before gullies form.</span>
          </div>
          <div className="metric">
            <strong>02</strong>
            <span>Downstream waterways, drains, wetlands, and coastal systems carry the real environmental cost.</span>
          </div>
          <div className="metric">
            <strong>03</strong>
            <span>Layered controls help slow runoff, protect exposed soil, and trap sediment before it leaves site.</span>
          </div>
        </div>
      </aside>
    </div>
  </section>

  <div className="content-shell">
    <div className="wrap article-grid">
      <aside className="toc" aria-label="Article contents">
        <p>In this guide</p>
        <a href="#why-different">Why civil works erosion is different</a>
        <a href="#environment">Environmental impact</a>
        <a href="#waterways">Sedimentation & Habitat Damage</a>
        <a href="#business-risk">Business risk</a>
        <a href="#products">Product selection</a>
        <a href="#example">Civil works example</a>
        <a href="#before">Before soil starts moving</a>
      </aside>

      <main>
        <section className="section lead-box">
          <p>A civil works site does not need to look badly damaged to be losing soil. Once the ground is cleared, graded, excavated, or exposed to repeated vehicle movement, loose particles can be carried away by wind, rain, and runoff long before a visible gully forms.</p>
          <p>That is why the question "how does soil erosion affect the environment?" matters for more than compliance paperwork. On construction, infrastructure, subdivision, road, mining, and drainage projects, soil erosion can quickly become a waterway, habitat, and community issue.</p>
          <p>The environmental damage often happens downstream. A small amount of uncontrolled sediment leaving a work area can enter stormwater pits, roadside drains, creeks, wetlands, and coastal systems. Once it moves beyond the site boundary, the cleanup becomes harder, the environmental risk increases, and the business loses control over the outcome.</p>
        </section>

        <section className="section" id="why-different">
          <div className="split">
            <div>
              <p className="eyebrow">Site disturbance</p>
              <h2>Why soil erosion from civil works is different</h2>
              <p>Natural erosion happens gradually as landscapes respond to wind, rain, water flow, and vegetation change. Civil works accelerate that process because they disturb the protective layers that usually hold soil in place.</p>
              <p>Vegetation is cleared, topsoil is stripped, slopes are reshaped, drains concentrate flow, and heavy machinery compacts some areas while loosening others. The result is a landscape that can shed soil much faster than it did before work began.</p>
              <p>This article focuses on the environmental consequences of that disturbance. For a more product-led guide to preventing erosion on active mining and construction sites, see Form Direct's article on <a href="https://formdirect.com.au/blog/mining-construction-soil-erosion-prevention-strategies/">how to prevent soil erosion on mining and construction sites</a>.</p>
            </div>
            <figure className="visual-card">
              <img src="https://formdirect.com.au/wp-content/uploads/2023/10/Form-Direct-Tailings-Dam-Wall-Erosion-Control-1.jpg" alt="Tailings dam wall erosion control project" />
              <figcaption>
                <h3 style={{ marginTop: 0, marginBottom: '8px', color: 'var(--yellow)', fontSize: '18px' }}>Tailings Dam Wall Erosion Control</h3>
                <p style={{ margin: '0 0 16px', lineHeight: 1.4, color: 'rgba(255, 255, 255, 0.82)' }}>See how we helped stabilise a massive tailings dam wall using TrexGeo coir mesh and hydroseeding to prevent environmental damage.</p>
                <a className="button" href="https://formdirect.com.au/projects/tailings-dam-wall-erosion-control/" style={{ width: '100%', border: 'none' }}>View Project</a>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section answer-card" id="environment">
          <h2>How does soil erosion affect the environment?</h2>
          <p>Soil erosion affects the environment by removing the soil that supports vegetation, carrying sediment into waterways, reducing water quality, damaging aquatic habitat, and increasing the pressure on downstream drainage systems.</p>
          <p>The issue is not just the loss of soil from the worksite. It is where that soil ends up. Fine sediment can stay suspended in water, turning it cloudy and reducing light penetration. Heavier particles settle in drains, creeks, ponds, and wetlands, changing the shape and depth of those systems.</p>
          <div className="impact-flow" aria-label="Soil erosion impact pathway">
            <div className="flow-step"><b>Step 1</b><span>Ground is exposed</span></div>
            <div className="flow-step"><b>Step 2</b><span>Rain and traffic loosen soil</span></div>
            <div className="flow-step"><b>Step 3</b><span>Runoff carries sediment</span></div>
            <div className="flow-step"><b>Step 4</b><span>Drains and waterways receive it</span></div>
            <div className="flow-step"><b>Step 5</b><span>Habitat and compliance risks rise</span></div>
          </div>
          <p>Sediment can also carry other pollutants with it. Nutrients, hydrocarbons, cement residue, metals, and other site contaminants may attach to soil particles and travel with runoff. This means erosion can turn a local surface management issue into a broader water quality problem.</p>
        </section>

        <section className="section" id="waterways">
          <p className="eyebrow">Downstream and Habitat Damage</p>
          <h2>Sedimentation and Habitat Degradation</h2>
          <p>Sedimentation is one of the most serious environmental consequences of erosion from civil works. It occurs when eroded soil settles in waterways, drainage channels, basins, wetlands, or coastal receiving environments. This creates a chain reaction of downstream and surface damage:</p>

          <div className="card-grid">
            <article className="impact-card">
              <span className="icon">W</span>
              <h3>Water quality drops</h3>
              <p>Fine sediment clouds water, limits light penetration, and can transport nutrients, hydrocarbons, cement residue, metals, and other site contaminants.</p>
            </article>
            <article className="impact-card">
              <span className="icon">H</span>
              <h3>Habitat is smothered</h3>
              <p>Settled material can cover aquatic plants, fish spawning areas, and small habitat spaces used by organisms in creeks and wetlands.</p>
            </article>
            <article className="impact-card">
              <span className="icon">D</span>
              <h3>Drainage capacity reduces</h3>
              <p>Built-up sediment in drains, culverts, channels, and basins adds maintenance pressure and can increase flooding risk during heavy rain.</p>
            </article>
            <article className="impact-card">
              <span className="icon">R</span>
              <h3>Revegetation slows</h3>
              <p>Lost topsoil removes organic matter, seed banks, soil organisms, and structure, leaving exposed surfaces vulnerable for longer.</p>
            </article>
          </div>

          <div className="split" style={{ marginTop: '42px' }}>
            <div>
              <p>As sediment builds up, it reduces channel capacity and increases local flooding risk. If a site is struggling with surface water movement, erosion control should be planned alongside drainage design. See Form Direct's guide to <a href="https://formdirect.com.au/blog/flooded-construction-site-stormwater-solutions">stormwater solutions for flooded construction sites</a>.</p>
              <p>The impact is not limited to plants. When vegetation fails to establish, wildlife loses shelter, shade, and movement corridors. In riparian areas, reduced vegetation can increase water temperature, destabilise banks, and weaken the natural buffer between the worksite and the waterway.</p>
            </div>
            <figure className="visual-card">
              <img src="https://formdirect.com.au/wg/images/trexpavelok/formdirect-trexpavelok-after-full.webp" alt="Trex Ground Stabilisation System preventing erosion" />
              <figcaption>Trex Ground Stabilisation System locks soil in place, creating a stable surface that prevents erosion and distributes weight evenly.</figcaption>
            </figure>
          </div>
        </section>

        <section className="section" id="business-risk">
          <p className="eyebrow">Commercial impact</p>
          <h2>How erosion becomes a business risk</h2>
          <p>For contractors, developers, civil operators, and site managers, environmental erosion impacts quickly become commercial impacts.</p>
          <p>Sediment leaving a site can trigger inspections, public complaints, cleanup costs, rework, project delays, and reputational damage. In sensitive catchments, near waterways, or on projects with strict environmental management plans, small control failures can create disproportionate consequences.</p>
          <table className="risk-table">
            <thead>
              <tr>
                <th>Site symptom</th>
                <th>Environmental consequence</th>
                <th>Business consequence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Muddy runoff enters a roadside drain</td>
                <td>Sediment reaches stormwater and receiving waterways</td>
                <td>Complaint, cleanout cost, inspection, or enforcement risk</td>
              </tr>
              <tr>
                <td>Access roads rut after rain</td>
                <td>More loose material is available for runoff</td>
                <td>Slower site access, rework, and unsafe work areas</td>
              </tr>
              <tr>
                <td>Batters and stockpiles slump</td>
                <td>Soil is exposed for longer and vegetation is delayed</td>
                <td>Extra stabilisation work and project delay pressure</td>
              </tr>
            </tbody>
          </table>
          <p>Where the main issue is weak or traffic-damaged ground, it may be worth reviewing Form Direct's guidance on <a href="https://formdirect.com.au/blog/form-direct-environmental-solutions/">environmental solutions for construction and civil sites</a>.</p>
          <div className="callout">The key point is simple: erosion controls should be installed before soil starts moving, not after sediment appears in the drain.</div>
        </section>

        <section className="section" id="products">
          <p className="eyebrow">Control selection</p>
          <h2>Match erosion control products to the environmental risk</h2>
          <p>Effective erosion control is not about installing one product everywhere. It is about matching the control to the way water and soil are likely to move across the site.</p>
          <p>Form Direct's <a href="https://formdirect.com.au/enviro/erosion-control/">erosion control range</a> includes TrexGeo products designed for civil, construction, landscaping, and environmental restoration projects. The right combination can help businesses reduce sediment runoff, support revegetation, and protect surrounding areas.</p>
          <div className="products">
            <a className="product-card" href="https://formdirect.com.au/enviro/erosion-control/trexgeo-coir-logs/">
              <img src="https://formdirect.com.au/media/catalog/product/cache/1/image/265x/9df78eab33525d08d6e5fb8d27136e95/i/m/image_17371_1.jpg" alt="TrexGeo coir log product" />
              <div>
                <h3>TrexGeo Coir Logs</h3>
                <p>Use along swales, drains, creek edges, slopes, and construction boundaries to slow water movement and filter sediment.</p>
                <span className="tag">Flow paths</span>
              </div>
            </a>
            <a className="product-card" href="https://formdirect.com.au/enviro/erosion-control/trexgeo-coir-mesh-400gsm-100sqm-2-x-50m/">
              <img src="https://formdirect.com.au/media/wysiwyg/menu/formdirect-enviro-subcat-coir-mesh.jpg" alt="TrexGeo coir mesh" />
              <div>
                <h3>TrexGeo Coir Mesh</h3>
                <p>Use across exposed slopes, roadside batters, embankments, drainage channels, and revegetation areas.</p>
                <span className="tag">Surface cover</span>
              </div>
            </a>
            <a className="product-card" href="https://formdirect.com.au/enviro/erosion-control/trexgeo-coir-blanket-with-wave-net-500gsm-2x25m-roll/">
              <img src="https://formdirect.com.au/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/f/o/formdirect-trexgeo-coir-blanket-with-wave-net-500gsm.jpg" alt="TrexGeo coir blanket product" />
              <div>
                <h3>TrexGeo Coir Blankets</h3>
                <p>Use where slopes are steeper, flows are stronger, or wind exposure calls for more continuous surface coverage.</p>
                <span className="tag">Exposed slopes</span>
              </div>
            </a>
            <a className="product-card" href="https://formdirect.com.au/enviro/erosion-control/trexgeo-750gsm-jute-mat-roll-1-83-x-25m-roll-no-slit/">
              <img src="https://formdirect.com.au/media/wysiwyg/menu/formdirect-enviro-subcat-jutes.jpg" alt="Jute erosion control products" />
              <div>
                <h3>Jute Matting</h3>
                <p>Use for revegetation support and short-term surface protection where vegetation is the long-term stabiliser.</p>
                <span className="tag">Revegetation</span>
              </div>
            </a>
            <a className="product-card" href="https://formdirect.com.au/enviro/erosion-control/geotextile-class-a-2x50m-100m2-a14/">
              <img src="https://formdirect.com.au/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/g/e/geotextile.jpg" alt="Geotextile fabric products" />
              <div>
                <h3>Geotextile Fabrics</h3>
                <p>Use where separation, filtration, drainage layers, or reinforcement support is required in the control plan.</p>
                <span className="tag">Filtration</span>
              </div>
            </a>
            <a className="product-card" href="https://formdirect.com.au/enviro/erosion-control/silt-fence-860mm-x-100m/">
              <img src="https://formdirect.com.au/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_13300.jpg" alt="Silt fence products" />
              <div>
                <h3>Silt Fences and Barriers</h3>
                <p>Use as boundary and low-point controls to intercept sediment before it leaves the work area.</p>
                <span className="tag">Perimeter control</span>
              </div>
            </a>
          </div>
        </section>

        <section className="section" id="example">
          <p className="eyebrow">Practical example</p>
          <h2>A road upgrade beside a drainage channel</h2>
          <p>Consider a road upgrade beside a drainage channel. The project involves clearing vegetation, reshaping the batter, stockpiling soil, and creating temporary access for machinery. If a storm hits before the exposed soil is protected, runoff can carry fine sediment into the channel within minutes.</p>
          <div className="example-map" role="img" aria-label="Illustrated road upgrade erosion control plan">
            <div className="road"></div>
            <div className="channel"></div>
            <div className="map-label label-one"><b>Reshaped batter</b>Protect with coir mesh or a coir blanket while grass establishes.</div>
            <div className="map-label label-two"><b>Toe of slope</b>Install coir logs to slow runoff and filter sediment.</div>
            <div className="map-label label-three"><b>Site boundary</b>Add silt fencing as final perimeter control before runoff reaches the channel.</div>
          </div>
          <p>A stronger environmental control plan treats each risk area separately. That layered approach reduces reliance on a single control and gives the site a better chance of performing during real weather, not just during a dry inspection.</p>
        </section>

        <section className="section" id="before">
          <p className="eyebrow">Pre-start planning</p>
          <h2>What businesses should do before soil starts moving</h2>
          <p>The most effective erosion control decisions are made before excavation, clearing, or grading begins. As a general guide, businesses should identify where water will enter the site, where it will concentrate, where it may leave, and which areas will remain exposed for the longest.</p>
          <div className="checklist">
            <article className="check-card">
              <b>1</b>
              <h3>Slow concentrated runoff</h3>
              <p>Use TrexGeo Coir Logs where runoff needs to be slowed, filtered, or redirected through swales, drains, and waterway edges.</p>
            </article>
            <article className="check-card">
              <b>2</b>
              <h3>Protect exposed surfaces</h3>
              <p>Use TrexGeo Coir Mesh or coir blankets on exposed slopes, batters, and revegetation areas where soil needs surface protection.</p>
            </article>
            <article className="check-card">
              <b>3</b>
              <h3>Layer filtration and barriers</h3>
              <p>Use geotextiles and sediment barriers where filtration, separation, or boundary control is required.</p>
            </article>
            <article className="check-card">
              <b>4</b>
              <h3>Inspect after rain</h3>
              <p>Review controls after rainfall because even well-designed systems need maintenance once sediment starts building up.</p>
            </article>
          </div>
          <p>The goal is not only to pass inspection. It is to stop civil works from transferring environmental cost to the waterway, the neighbouring property, or the downstream community.</p>
        </section>

        <section className="section answer-card">
          <h2>Reduce environmental impact with the right erosion control products</h2>
          <p>So, how does soil erosion affect the environment? It removes fertile soil, sends sediment into waterways, degrades habitat, increases flood and drainage pressure, and can carry pollutants beyond the site boundary.</p>
          <p>For businesses, reducing that impact starts with early planning and the right product selection. TrexGeo coir logs, coir mesh, coir blankets, jute products, geotextiles, and sediment barriers each solve a different part of the erosion problem.</p>
          <a className="button" href="https://formdirect.com.au/enviro/erosion-control/">View erosion control range</a>
        </section>
      </main>
    </div>
  </div>

  <footer className="footer-cta">
    <div className="wrap">
      <div>
        <p className="eyebrow">Big expertise. Real convenience. Solid commitment.</p>
        <h2>Need help matching erosion controls to a civil works site?</h2>
        <p>Talk to Form Direct about TrexGeo coir products, geotextiles, silt fences, and layered controls for construction, civil, landscaping, and rehabilitation projects.</p>
      </div>
      <a className="button" href="https://formdirect.com.au/contact-us/">Talk to our team</a>
    </div>
  </footer>
    </>
  );
}

export default App;
