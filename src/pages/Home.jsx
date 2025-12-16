import React from "react";
import Banner from "../assets/images/banner.png";
import Blog1 from "../assets/images/blog1.png";
import Blog2 from "../assets/images/blog2.png";
import Blog3 from "../assets/images/blog3.png";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section style={styles.hero}>
        {/* Left Content */}
        <div style={styles.left}>
          <span style={styles.badge}>Powerful Solutions</span>

          <h1 style={styles.title}>
            Our Cutting-Edge <br /> Software Solutions
          </h1>

          <p style={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus non enim lacus.
          </p>

          <p style={styles.trial}>30 Day Free Trial · No Credit Card Required</p>

          <div style={styles.inputWrap}>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.input}
            />
            <button style={styles.button}>Get Started – It’s Free</button>
          </div>

          <p style={styles.note}>Add some additional disclaimer text here.</p>

          <div style={styles.users}>
            <span>👤 👤 👤</span>
            <p>24K+ Active Users</p>
          </div>
        </div>

        {/* Right Illustration */}
        <div style={styles.right}>
          <div style={styles.imageBox}>
            <img
              src={Banner}
              alt="Banner"
              style={styles.bannerImage}
            />

            {/* Top-right card */}
            <div style={styles.topRightCard}>
              <span style={styles.icon}>⭐</span>
              <div>
                <p style={styles.cardNumber}>+416</p>
                <p style={styles.cardText}>Happy Customers</p>
              </div>
            </div>

            {/* Top-left card */}
            <div style={styles.topLeftCard}>
              <p style={styles.cardTitle}>All Designers</p>
              <p style={styles.cardSubtitle}>Meeting-Up</p>
              <div style={styles.cardStats}>
                <p style={styles.cardPercentage}>62%</p>
                <p style={styles.cardValue}>2M</p>
              </div>
              <div style={styles.cardLine}></div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section Below Hero */}
      <section style={styles.newSection}>
        {/* Left Content */}
        <div style={styles.newLeft}>
          <span style={styles.orangeBadge}>Powerful Solutions</span>
          <h2 style={styles.newTitle}>
            A powerful solution to boost <br /> your business performance
          </h2>
        </div>

        {/* Right Content */}
        <div style={styles.newRight}>
          <p style={styles.newDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget
            sapien vel quam feugiat tincidunt.
          </p>
          <div style={styles.reviewBtnWrapper}>
            <button style={styles.reviewBtn}>See Customer Review</button>
          </div>
        </div>
      </section>

     

  {/* Product Features Section */}
<section style={styles.featuresSection}>
  <div style={styles.featuresContent}>

    {/* Orange Title */}
    <div style={styles.featuresBox}>
      <h2 style={styles.featuresTitle}>Product Features</h2>
    </div>

    <p style={styles.featuresSubtitle}>
      Streamline tasks with <br /> optimized workflows
    </p>
    <p style={styles.featuresDesc}>
      Lorem ipsum dolor sit amet, consectetur <br />
      adipiscing elit. Vivamus non enim lacus.
    </p>

    {/* Cards Container */}
    <div style={styles.cardsContainer}>

      {/* ================= CARD 1 ================= */}
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>
          Keep on top of project management
        </h3>
        <p style={styles.cardDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p style={styles.cardLink}>Learn More</p>

        <div style={styles.cardBlueGroup}>
          <div style={styles.cardBlue}>
            <p style={styles.cardBlueText}>Today</p>
          </div>

          <div style={styles.cardFooterBorder}>
            <span style={styles.userIcon}>👩</span>
            <span>John 👆✌️ – Task Overdue</span>
          </div>

          <div style={styles.cardFooterBorder}>
            <span style={styles.userIcon}>👨</span>
            <span>Anna – Just Completed ✅</span>
          </div>
        </div>
      </div>

      {/* ================= CARD 2 ================= */}
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>
          Analyze your business results in one place.
        </h3>

        <p style={styles.cardDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <p style={styles.cardLink}>Learn More</p>

        <div style={styles.lightBlueBox}>
          <div style={styles.reportRow}>
            <span style={styles.reportTitle}>Sales Report</span>
            <span style={styles.reportValue}>+3.2%</span>
          </div>

          <div style={styles.barChart}>
            <div style={{ ...styles.bar, height: "40%" }} />
            <div style={{ ...styles.bar, height: "65%" }} />
            <div style={{ ...styles.bar, height: "50%" }} />
            <div style={{ ...styles.bar, height: "100%" }} />
            <div style={{ ...styles.bar, height: "55%" }} />
            <div style={{ ...styles.bar, height: "40%" }} />
            <div style={{ ...styles.bar, height: "60%" }} />
          </div>
        </div>
      </div>

      {/* ================= CARD 3 ================= */}
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>
          Keep track of sales and shipping progress
        </h3>

        <p style={styles.cardDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <p style={styles.cardLink}>Learn More</p>

        <div style={styles.lightBlueBox}>
          <div style={styles.transactionHeader}>
            <span style={styles.transactionTitle}>
              Todays Transaction
            </span>
            <span style={styles.dots}>⋯</span>
          </div>

          <div style={styles.transactionBody}>
            {/* Left */}
            <div>
              <p style={styles.transactionNumber}>32/48</p>
              <p style={styles.transactionLabel}>
                Order Completed
              </p>

              <p
                style={{
                  ...styles.transactionNumber,
                  marginTop: "12px",
                }}
              >
                17/24
              </p>
              <p style={styles.transactionLabel}>
                On Shopping
              </p>
            </div>

            {/* Right Circles */}
            <div style={styles.circleWrapper}>
              <div style={styles.circleChartPurple}>
                <div style={styles.circleInner}>68%</div>
              </div>

              <div style={styles.circleChartPink}>
                <div style={styles.circleInner}>40%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>



{/* New Section */}
<section style={styles.growSection}>
  {/* Top Icon */}
  <div style={styles.iconWrapper}>☁️</div>

  {/* Title */}
  <h2 style={styles.growTitle}>Grow your business to the next level</h2>

  {/* Description */}
  <p style={styles.growDesc}>
    Lorem ipsum sit amet, consectetur <br /> adipiscing elit. Vivamus non enim lacus.
  </p>

  {/* Features Row */}
  <div style={styles.featuresRow}>
    {/* Feature 1 */}
    <div style={styles.featureBox}>
      <div style={styles.featureIcon}>👤</div>
      <h3 style={styles.featureTitle}>User Management</h3>
      <p style={styles.featureDesc}>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Vivamus non enim lacus.</p>
    </div>

    {/* Feature 2 */}
    <div style={styles.featureBox}>
      <div style={styles.featureIcon}>📊</div>
      <h3 style={styles.featureTitle}>Insightful Data Analytics</h3>
      <p style={styles.featureDesc}>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.Vivamus non enim lacus. </p>
    </div>

    {/* Feature 3 */}
    <div style={styles.featureBox}>
      <div style={styles.featureIcon}>🔗</div>
      <h3 style={styles.featureTitle}>Effortless Integration</h3>
      <p style={styles.featureDesc}>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Vivamus non enim lacus.</p>
    </div>

    {/* Feature 4 */}
    <div style={styles.featureBox}>
      <div style={styles.featureIcon}>🛡️</div>
      <h3 style={styles.featureTitle}>Robust Security Suite</h3>
      <p style={styles.featureDesc}>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.Vivamus non enim lacus.</p>
    </div>
  </div>
</section>



{/* New Product Feature Section */}
<section style={styles.productFeatureSection}>
  <div style={styles.productFeatureContent}>
    
    {/* Left Side */}
    <div style={styles.leftFeature}>
      <h2 style={styles.leftTitle}>Product Feature</h2>
      <h3 style={styles.leftSubtitle}>Powerful solutions <br /> redefining growth.</h3>
      <p style={styles.leftDesc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Vivamus non enim lacus. Nullam congue blandit quam, sit <br /> amet scelerisque turpis pallentesque eu.
      </p>
      
      {/* Find out more button */}
      <button style={styles.findMoreBtn}>Find Out More</button>
      
      {/* Tick List */}
      <div style={styles.tickList}>
        <p>✅ Register users in seconds</p>
        <p>✅ Collect authorization via secure portals</p>
      </div>
    </div>

    {/* Right Side Card */}
<div style={styles.rightFeatureCard}>
  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
  {/* Left: Otake */}
  <h3 style={styles.cardTitle}>Otake</h3>

  {/* Right: Triangle Tags */}
  <div style={{ position: "relative", width: "120px", height: "50px" }}>
    {/* Center Top: Designer */}
    <span style={{
      ...styles.tagOrange,
      position: "absolute",
      top: "0",
      left: "50%",
      transform: "translateX(-50%)",
      marginLeft: "150px",   // 👈 yahan se right shift

    }}>
      Designer
    </span>

    {/* Bottom Left: Flowbase */}
    <span style={{
      ...styles.tagBlue,
      position: "absolute",
      bottom: "-20px",
      left: "-15px",
      marginLeft: "150px",   // 👈 yahan se right shift

    }}>
      Flowbase
    </span>

    {/* Bottom Right: John */}
    <span style={{
      ...styles.tagSkyBlue,
      position: "absolute",
      bottom: "-20px",
      right: "-5px",
      marginRight: "-170px",   // 👈 yahan se right shift


    }}>
      John
    </span>
  </div>
</div>


<p style={{ ...styles.subTitle, marginTop: "-40px" }}>500_Experience</p>

  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "10px" }}>
    <p style={styles.contentText}>Enhanced user experience</p>

    <div style={styles.borderBox}>
      Intuitive interface for seamless navigation <br /> and interaction.
    </div>

    <div style={styles.borderBox}>
      User-controlled settings for person.
    </div>

    <div style={styles.borderBox}>
      Redefining UI/UX
    </div>
  </div>
</div>


  </div>
</section>

{/* Left Card - Right Content Section */}
<section style={styles.leftCardRightContentSection}>
  <div style={styles.leftCardRightContentWrapper}>

    {/* ================= LEFT CARD ================= */}
    <div style={styles.leftCard}>
      <h3 style={styles.cardTitle}>Otake Performance</h3>

      {/* Top badges */}
      <div style={styles.topBadges}>
        <span style={{ ...styles.badgeBlack }}>New Users</span>
        <span style={{ ...styles.badgeGray }}>Online Sales</span>
        <span style={{ ...styles.badgeBlue }}>Daily Sales</span>
      </div>

      {/* Top users section */}
      <div style={styles.topUsersBox}>
        <div style={styles.userIconCircle}>👤</div>
        <div style={styles.userInfo}>
          <p style={styles.userName}>John Smith</p>
          <p style={styles.userPurchase}>Purchase: 7 items</p>
        </div>
      </div>

      {/* Stats row */}
      <div style={styles.statsRow}>
  <div style={styles.statsIcons}>
    <span style={styles.icon}>👨</span>
    <span style={styles.icon}>👩</span>
    <span style={styles.icon}>🧑</span>
    <span style={styles.statsText}>12.4k</span>
  </div>
</div>


      {/* Bottom description outside border */}
      <p style={styles.bottomDesc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
      </p>
    </div>

    {/* ================= RIGHT CONTENT ================= */}
    <div style={styles.rightContent}>
      <h2 style={styles.rightTitle}>Product Features</h2>
      <p style={styles.rightSubTitle}>Take control of business <br /> analytics and data.</p>
      <p style={styles.rightDesc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Vivamus non enim lacus. Nullam congue blandit quam, sit <br /> amet scelerisque turpis pallentesque eu.
      </p>

      <button style={styles.findMoreBtn}>Find Out More</button>

      <ul style={styles.rightList}>
        <li>✅ Register users in seconds</li>
        <li>✅ Collect authorization via secure portals</li>
      </ul>
    </div>

  </div>
</section>


{/* ================= TESTIMONIAL STYLE SECTION ================= */}
<section style={styles.reviewSection}>
  <div style={styles.reviewWrapper}>

    {/* Badge */}
    <span style={styles.reviewBadge}>Product Features</span>

    {/* Title */}
    <h2 style={styles.reviewTitle}>
      Hear what our <br /> customers have to say
    </h2>

    {/* Cards */}
    <div style={styles.reviewGrid}>

      {[1, 2, 3, 4].map((item) => (
        <div key={item} style={styles.reviewCard}>

          {/* Stars */}
          <div style={styles.starRow}>
            ★ ★ ★ ★ ★
          </div>

          {/* Card title */}
          <h4 style={styles.reviewCardTitle}>
            Lorem ipsum headline
          </h4>

          {/* Description */}
          <p style={styles.reviewText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus non enim lacus. Nullam congue blandit quam.
          </p>

          {/* Footer */}
          <div style={styles.reviewFooter}>
            <span style={styles.brandName}>Brand Name</span>
            <span style={styles.readMore}>Read More →</span>
          </div>

        </div>
      ))}

    </div>
  </div>
</section>




 (
    <section style={styles.blogSection}>
      <div style={styles.blogWrapper}>

        <span style={styles.blogBadge}>Blog Articles</span>

        <h2 style={styles.blogHeading}>
          Take a look at the latest <br /> articles from Otake
        </h2>

        <p style={styles.blogSubHeading}>
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit. Vivamus non enim lacus.
        </p>

        <div style={styles.blogCards}>

          {/* CARD 1 */}
          <div style={styles.blogCard}>
            <div style={styles.blogImage}>
              <img 
                src={Blog1} 
                alt="Blog 1" 
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "14px" }}
              />
            </div>

            <p style={styles.blogTag}>Shipping</p>

            <h3 style={styles.blogTitle}>
              Use data analytics to improve shipping times.
            </h3>

            <p style={styles.blogDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus non enim lacus. Nulla.
            </p>

            <p style={styles.blogLink}>Learn More</p>
          </div>

          {/* CARD 2 */}
          <div style={styles.blogCard}>
            <div style={styles.blogImage}>
              <img 
                src={Blog2} 
                alt="Blog 2" 
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "14px" }}
              />
            </div>

            <p style={styles.blogTag}>Data · Sales Growth</p>

            <h3 style={styles.blogTitle}>
              Sales growth stories powered by marketing.
            </h3>

            <p style={styles.blogDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus non enim lacus. Nulla.
            </p>

            <p style={styles.blogLink}>Learn More</p>
          </div>

          {/* CARD 3 */}
          <div style={styles.blogCard}>
            <div style={styles.blogImage}>
              <img 
                src={Blog3} 
                alt="Blog 3" 
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "14px" }}
              />
            </div>

            <p style={styles.blogTag}>Data · Shipping · Sales Growth</p>

            <h3 style={styles.blogTitle}>
              Tips for building a returning customer base.
            </h3>

            <p style={styles.blogDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus non enim lacus. Nulla.
            </p>

            <p style={styles.blogLink}>Learn More</p>
          </div>

        </div>
      </div>
    </section>




     (
    <section style={styles.sectionWrapper}>
      <div style={styles.cardWrapper}>
        {/* Heading */}
        <h2 style={styles.heading}>Get Started with Otake</h2>

        {/* Subheading */}
        <p style={styles.subHeading}>
          Explore a new realm of efficiency and success with our cutting-edge SaaS.
        </p>

        {/* Stats Row */}
        <div style={styles.statsRow}>
          <div style={styles.statBox}>
            <p style={styles.statNumber}>120</p>
            <p style={styles.statLabel}>Employees</p>
          </div>

          <div style={styles.statBox}>
            <p style={styles.statNumber}>$31.5M</p>
            <p style={styles.statLabel}>Raised</p>
          </div>

          <div style={styles.statBox}>
            <p style={styles.statNumber}>7</p>
            <p style={styles.statLabel}>Years Old</p>
          </div>
        </div>

        {/* Button */}
        <button style={styles.ctaButton}>Apply Now - Otake Template</button>
      </div>
    </section>





<section className="pricing-wrapper">
      {/* pricing ka baaki code yahin rahega */}

      <FAQ />
    </section>

    </>
  );
};

const styles = {
  hero: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px 20px",
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  left: {
    flex: "1 1 400px",
    minWidth: "300px",
    background: "#fff",
    padding: "40px 30px",
    borderRadius: "28px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
  },
  right: {
    flex: "1 1 400px",
    minWidth: "300px",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    background: "linear-gradient(135deg,#d9b4ff,#f5c2e7)",
    borderRadius: "28px",
    padding: "20px",
  },
  badge: {
    display: "inline-block",
    background: "#f5d77b",
    padding: "6px 12px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "600",
    marginBottom: "16px",
  },
  title: { fontSize: "36px", fontWeight: "800", lineHeight: "1.2", marginBottom: "20px" },
  desc: { fontSize: "16px", color: "#555", marginBottom: "20px" },
  trial: { fontSize: "14px", color: "#333", marginBottom: "16px" },
  inputWrap: { display: "flex", gap: "12px", marginBottom: "12px", flexWrap: "wrap" },
  input: { flex: 1, padding: "14px", borderRadius: "10px", border: "1px solid #ddd", outline: "none" },
  button: { padding: "14px 20px", background: "#111", color: "#fff", borderRadius: "10px", border: "none", fontWeight: "600", cursor: "pointer" },
  note: { fontSize: "12px", color: "#777", marginBottom: "20px" },
  users: { display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: "500" },
  imageBox: { width: "100%", maxWidth: "450px", height: "auto", aspectRatio: "1 / 1", borderRadius: "28px", position: "relative", overflow: "hidden" },
  bannerImage: { width: "100%", height: "100%", objectFit: "cover", borderRadius: "28px" },
  topRightCard: { position: "absolute", top: "200px", right: "20px", background: "#fff", padding: "12px 16px", borderRadius: "12px", display: "flex", alignItems: "center", gap: "10px", boxShadow: "0 8px 20px rgba(0,0,0,0.15)", transform: "rotate(5deg)" },
  icon: { fontSize: "24px" },
  cardNumber: { fontWeight: "700", fontSize: "16px", margin: 0 },
  cardText: { fontSize: "12px", margin: 0 },
  topLeftCard: { position: "absolute", top: "250px", left: "20px", background: "rgba(255,255,255,0.85)", padding: "12px 27px", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0,0,0,0.1)", transform: "rotate(-5deg)" },
  cardTitle: { fontSize: "14px", fontWeight: "600", margin: 0 },
  cardSubtitle: { fontSize: "12px", margin: "2px 0" },
  cardStats: { display: "flex", justifyContent: "space-between", alignItems: "center", margin: "4px 0" },
  cardPercentage: { fontSize: "10px", fontWeight: "700", margin: 0 },
  cardValue: { fontSize: "10px", fontWeight: "700", margin: 0 },
  cardLine: { width: "50px", height: "3px", background: "purple", borderRadius: "2px" },
  newSection: { display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", marginTop: "60px", gap: "20px", maxWidth: "1200px", marginLeft: "auto", marginRight: "auto", padding: "0 20px" },
  newLeft: { flex: "1 1 500px", minWidth: "300px" },
  orangeBadge: { display: "inline-block", background: "orange", color: "#fff", padding: "6px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "600", marginBottom: "12px" },
  newTitle: { fontSize: "28px", fontWeight: "700", lineHeight: "1.3", margin: 0 },
  newRight: { flex: "1 1 400px", minWidth: "280px", padding: "0", textAlign: "center" },
  newDesc: { fontSize: "14px", color: "#555", marginBottom: "16px" },
  reviewBtnWrapper: { display: "inline-block", border: "1px solid #ddd", borderRadius: "8px", padding: "5px 10px" },
  reviewBtn: { padding: "10px 20px", color: "black", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "600" },

  
featuresSection: {
  width: "100%",
  background: "#fff", // Section ka overall background white
  color: "black",
  padding: "90px 20px",
  display: "flex",
  justifyContent: "center",
},
featuresContent: {
  maxWidth: "1200px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
},
featuresBox: {
  background: "orange",
  borderRadius: "4px",
  padding: " 0px 8px",
  display: "inline-block",   // ye box content ke size ke hisaab se hoga
  width: "fit-content",      // strictly content ke size ke liye
  alignSelf: "center",       // center me laane ke liye
},

featuresTitle: { fontSize: "10px", fontWeight: "700" },
featuresSubtitle: { 
  fontSize: "30px", 
  fontWeight: "500", 
  marginBottom: "4px", // thoda kam gap
  marginTop: "-10px"   // upar shift karne ke liye
},
featuresDesc: { 
  fontSize: "11px", 
  color: "#000", 
  marginBottom: "16px",
  marginTop: "-29px"    // upar shift
},

cardsContainer: {
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  flexWrap: "wrap",        // wrap karenge mobile me
  overflowX: "hidden",
  paddingBottom: "10px",
},

card: {
  flex: "1 1 300px",      // minimum 300px, grow if space available
  maxWidth: "350px",      // max width 350px
  background: "#fff",
  color: "#000",
  borderRadius: "12px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
},


cardTitle: { fontSize: "22px", fontWeight: "700" },
cardDesc: { fontSize: "14px", color: "#555" },
cardLink: { fontSize: "14px", fontWeight: "600", border: "1px solid #ddd", paddingTop: "10px", paddingBottom: "10px", cursor: "pointer" },
cardBlue: { 
  background: "blue", 
  padding: "0px", 
  borderRadius: "6px", 
  display: "inline-block", // content ke width ke barabar
  marginTop: "1px",       // thoda space upar ke liye
},
cardBlueText: { 
  color: "#fff", 
  fontWeight: "600",
  fontSize: "12px",
  lineHeight: "1"          // height ko exact match ke liye
},

cardBlueGroup: {
  background: "#e8f1ff",   // light blue
  borderRadius: "10px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
},


cardFooterBorder: {
  border: "1px solid #c6d9ff",
  borderRadius: "6px",
  padding: "6px 8px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "14px",
  background: "#fff",   // optional (thoda clean look)
},userIcon: { fontSize: "18px" },


lightBlueBox: {
  background: "#e8f1ff",
  borderRadius: "10px",
  padding: "12px",
  marginTop: "10px",
},

reportRow: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "14px",
  fontWeight: "600",
  marginBottom: "10px",
},

reportTitle: {
  color: "#333",
},

reportValue: {
  color: "green",
  fontWeight: "700",
},

barChart: {
  display: "flex",
  alignItems: "flex-end",
  gap: "20px",
  height: "80px",
},

bar: {
  width: "30px",
  background: "#4f7cff",
  borderRadius: "4px",
},

transactionNumber: {
  fontSize: "18px",
  fontWeight: "600",
  marginLeft: "-6px",   // ⬅️ left shift
},

transactionLabel: {
  fontSize: "10px",     // ⬅️ bahut chhota
  color: "#666",
},

transactionBody: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
},



circleWrapper: {
  display: "flex",
  flexDirection: "column",   // ⬅️ upar niche
  gap: "12px",
  alignItems: "center",
},



circleChartPurple: {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  background:
    "conic-gradient(purple 0% 68%, #ddd 68% 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
},

circleChartPink: {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  background:
    "conic-gradient(#ff5da2 0% 40%, #ddd 40% 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
},

circleInner: {
  width: "46px",
  height: "46px",
  borderRadius: "50%",
  background: "#e8f1ff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "13px",
  fontWeight: "700",
},






featureIcon: {
  fontSize: "28px",
  color: "purple",
  marginBottom: "10px",
},

growSection: {
  width: "100%",
  background: "#f8f9fa", // light gray background
  textAlign: "center",
  padding: "60px 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
},

iconWrapper: {
  fontSize: "40px",
},

growTitle: {
  fontSize: "28px",
  fontWeight: "700",
  margin: "0",
},

growDesc: {
  fontSize: "14px",
  color: "#555",
  maxWidth: "600px",
},

featuresRow: {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "60px",
  marginTop: "40px",
},



featureTitle: {
  fontSize: "16px",
  fontWeight: "700",
  marginBottom: "8px",
},

featureDesc: {
  fontSize: "12px",
  color: "#555",
  lineHeight: "1.4",
},






productFeatureSection: {
  padding: "60px 20px",
  background: "#f9f9f9",
},

productFeatureContent: {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  maxWidth: "1200px",
  margin: "0 auto",
  gap: "20px",
},

leftFeature: {
  flex: "1 1 400px",
  minWidth: "280px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
},

leftTitle: {
  fontSize: "15px",
  fontWeight: "500",
},

leftSubtitle: {
  fontSize: "30px",
  fontWeight: "600",
  marginTop: "-4px",
},

leftDesc: {
  fontSize: "14px",
  color: "#555",
  marginTop: "-25px", // negative margin se upar shift

},

findMoreBtn: {
  marginTop: "12px",
  background: "#000",
  color: "#fff",
  padding: "10px 10px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "600",
  width:"120px",
},

tickList: {
  marginTop: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  fontSize: "14px",
  color: "#333",
},

rightFeatureCard: {
  background: "#fff",
    width: "500px",          // 👈 pehle se zyada width

  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
},

cardTitle: { fontSize: "22px", fontWeight: "700" },
cardSubTitle: {
  fontSize: "14px",
  color: "#555",
  marginTop: "-4px", // content ko upar shift karega
},

tagOrange: {
  background: "orange",
  color: "#fff",
  padding: "4px 8px",
  borderRadius: "6px",
  fontSize: "12px",
  fontWeight: "600",
},

tagBlue: {
  background: "blue",
  color: "#fff",
  padding: "4px 8px",
  borderRadius: "6px",
  fontSize: "12px",
  fontWeight: "600",
},

tagSkyBlue: {
  background: "skyblue",
  color: "#fff",
  padding: "4px 8px",
  borderRadius: "6px",
  fontSize: "12px",
  fontWeight: "600",
},

contentText: {
  fontSize: "14px",
  fontWeight: "500",
  color: "blue",
},

borderBox: {
  border: "1px solid #ccc",
  borderRadius: "6px",
  padding: "8px 10px",
  fontSize: "13px",
  background: "#f5f5f5", // light bg for clarity
},

cardTitle: {
  fontSize: "40px",
  fontWeight: "700",
},

cardSubTitle: {
  fontSize: "16px",
  fontWeight: "600",
  color: "#555",
},

cardContent: {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
},

cardLeft: {
  flex: "1",
  background: "#e8f1ff",
  padding: "10px",
  borderRadius: "6px",
  textAlign: "center",
},

cardRight: {
  flex: "1",
  background: "#dcd4ff",
  padding: "10px",
  borderRadius: "6px",
  textAlign: "center",
},


leftCardRightContentSection: {
  padding: "60px 20px",
  background: "#fff",
  display: "flex",
  justifyContent: "center",
},
leftCardRightContentWrapper: {
  display: "flex",
  gap: "40px",
  maxWidth: "1200px",
  width: "100%",
  flexWrap: "wrap",
},
leftCard: {
  flex: "1 1 450px",
  background: "#fff",
  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1), 0 0 10px rgba(128,0,128,0.1), 0 0 15px rgba(173,216,230,0.1), 0 0 8px rgba(255,255,255,0.2)",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
},
cardTitle: { fontSize: "22px", fontWeight: "700" },
cardSubTitle: { fontSize: "14px", color: "#555", marginTop: "-4px" },
topBadges: { display: "flex", gap: "8px", marginBottom: "12px" },
badgeBlack: {
  background: "#000",
  color: "#fff",
  padding: "4px 8px",
  borderRadius: "4px",
  fontSize: "12px",
},
badgeGray: {
  background: "#888",
  color: "#fff",
  padding: "4px 8px",
  borderRadius: "4px",
  fontSize: "12px",
},
badgeBlue: {
  background: "#4f7cff",
  color: "#fff",
  padding: "4px 8px",
  borderRadius: "4px",
  fontSize: "12px",
},
topUsersBox: {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "8px",
  border: "1px solid #ddd",
  borderRadius: "6px",
},
userIconCircle: {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  background: "#e8f1ff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
},
userInfo: { display: "flex", flexDirection: "column", gap: "2px" },
userName: { fontSize: "14px", fontWeight: "600" },
userPurchase: { fontSize: "12px", color: "#555" },
statsRow: {
  display: "flex",
  alignItems: "center",
  marginTop: "12px",
},
statsIcons: {
  display: "flex",
  alignItems: "center",
  gap: "6px", // icons ke beech gap
},
icon: {
  fontSize: "18px", // thin/small icons
},
statsText: {
  fontWeight: "700",
  fontSize: "14px",
  marginLeft: "6px", // icons se thoda space
},

statsLabel: { fontSize: "12px", color: "#555" },
bottomDesc: { fontSize: "13px", color: "#555", marginTop: "10px" },

rightContent: { flex: "1 1 450px", display: "flex", flexDirection: "column", gap: "12px", marginLeft:"210px", },
rightTitle: { fontSize: "15px", fontWeight: "600" },
rightSubTitle: { fontSize: "26px", fontWeight: "600" },
rightDesc: { fontSize: "14px", color: "#555" },
findMoreBtn: {
  marginTop: "10px",
  background: "#000",
  color: "#fff",
  padding: "8px 12px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "600",
  width:"130px",
},
rightList: { listStyle: "none", padding: "0", marginTop: "8px", display: "flex", flexDirection: "column", gap: "4px" },


reviewSection: {
  width: "100%",
  padding: "120px 20px",
  background:
    "linear-gradient(180deg, #2b3b55 0%, #111827 100%)",
  display: "flex",
  justifyContent: "center",
},

reviewWrapper: {
  maxWidth: "1200px",
  textAlign: "center",
},

reviewBadge: {
  display: "inline-block",
  background: "#f5b942",
  color: "#000",
  padding: "4px 12px",
  borderRadius: "6px",
  fontSize: "11px",
  fontWeight: "700",
  marginBottom: "14px",
},

reviewTitle: {
  fontSize: "42px",
  fontWeight: "700",
  color: "#fff",
  marginBottom: "60px",
  lineHeight: "1.2",
},

reviewGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "28px",
},

reviewCard: {
  background: "rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "26px",
  textAlign: "left",
  border: "1px solid rgba(255,255,255,0.08)",
  backdropFilter: "blur(14px)",
  boxShadow:
    "0 0 0 1px rgba(120,140,255,0.15), 0 30px 60px rgba(0,0,0,0.45)",
},

starRow: {
  fontSize: "14px",
  color: "#ffd166",
  marginBottom: "14px",
},

reviewCardTitle: {
  fontSize: "16px",
  fontWeight: "700",
  color: "#fff",
  marginBottom: "10px",
},

reviewText: {
  fontSize: "13px",
  lineHeight: "1.7",
  color: "#c7d2fe",
},

reviewFooter: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "26px",
},

brandName: {
  fontSize: "13px",
  fontWeight: "700",
  color: "#e5e7eb",
},

readMore: {
  fontSize: "13px",
  color: "#a5b4fc",
  cursor: "pointer",
},



blogSection: {
  width: "100%",
  padding: "90px 20px",
  background:
    "linear-gradient(180deg, #f4efff 0%, #eef4ff 100%)",
  display: "flex",
  justifyContent: "center",
},

blogWrapper: {
  maxWidth: "1200px",
  textAlign: "center",
},

blogBadge: {
  display: "inline-block",
  background: "#f5b942",
  color: "#000",
  fontSize: "11px",
  fontWeight: "700",
  padding: "4px 12px",
  borderRadius: "6px",
  marginBottom: "14px",
},

blogHeading: {
  fontSize: "38px",
  fontWeight: "700",
  color: "#111",
  lineHeight: "1.25",
},

blogSubHeading: {
  fontSize: "14px",
  color: "#555",
  marginTop: "10px",
  marginBottom: "60px",
},

blogCards: {
  display: "flex",
  gap: "24px",
  justifyContent: "space-between",
},

blogCard: {
  flex: "0 0 32%",   // laptop → 3 cards ek row me
  background: "#fff",
  borderRadius: "18px",
  padding: "16px",
  boxShadow: "0 10px 30px rgba(120,120,255,0.18)",
},





blogImage: {
  background: "#eef3ff",
  borderRadius: "14px",
  height: "190px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#999",
  marginBottom: "14px",
},

blogTag: {
  fontSize: "11px",
  color: "#666",
  marginBottom: "6px",
},

blogTitle: {
  fontSize: "18px",
  fontWeight: "700",
  color: "#111",
  marginBottom: "8px",
},

blogDesc: {
  fontSize: "13px",
  color: "#666",
  lineHeight: "1.6",
  marginBottom: "14px",
},

blogLink: {
  fontSize: "13px",
  fontWeight: "600",
  color: "#555",
  cursor: "pointer",
},






  sectionWrapper: {
    width: "100%",
    padding: "60px 20px",
    background: "#f0f0f0", // overall bg light gray for contrast
    display: "flex",
    justifyContent: "center",
  },

  cardWrapper: {
    maxWidth: "900px",
    width: "100%",
    background:"black",
    padding: "40px 30px",
    borderRadius: "20px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
    color: "#fff",
    textAlign: "center",
  },

  heading: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "16px",
  },

  subHeading: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#ddd",
    marginBottom: "40px",
  },

  statsRow: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
    marginBottom: "40px",
  },

  statBox: {
    textAlign: "center",
  },

  statNumber: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "4px",
  },

  statLabel: {
    fontSize: "13px",
    color: "#ccc",
  },

  ctaButton: {
    padding: "12px 24px",
    fontSize: "14px",
    fontWeight: "600",
    color: "black",
    backgroundColor: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

};

export default Home;
