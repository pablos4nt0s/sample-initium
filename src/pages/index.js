import Link from "@docusaurus/Link"
import useBaseUrl from "@docusaurus/useBaseUrl"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import classnames from "classnames"
import * as React from "react"
import { useEffect } from "react"
import styles from "./index.module.css"

const features = [
  {
    title: "CLI",
    imageUrl: "img/undraw_secure.svg",
    description: (
      <ul>
        <li>
          A single binary to build and deploy your code.
          <br />
          You can forget about:
          <em> Dockerfile, Kubernetes manifest, CI Pipelines.
          </em>
        </li>
        <li>
          The Initium CLI will manage these for you, including setting up a nice workflow<br /> with ephemeral environments for you PRs.</li>
      </ul>
    ),
  },
  {
    title: "Platform",
    imageUrl: "img/undraw_authentication.svg",
    description: (
      <ul>
        <li>
          A platform with optimal configuration and test coverage to setup a modern cloud-native platform starting from single machine or a Kubernetes clusters.
        </li>
        <li>
          Observability:
          <em> Logs, Metrics, Traceses enabled by default thanks to Grafana, Prometheus, Loki, Open-telemetry.</em>
        </li>
        <li>
          Scalability and flexibility:
          <em> Test your code under load and enable complex behaviour like blue-green or canary deployments thanks to Knative and Istio</em>
        </li>
      </ul>
    ),
  },
]

const kFormatter = (num) => {
  return Math.sign(num)
}

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={classnames("col col--6", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <div className="feature-image-wrapper">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      {description}
    </div>
  )
}

export default function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  useEffect(() => {
    window
      .fetch("https://api.github.com/repos/nearform/initium")
      .then((res) => res.json())
      .then((data) => {
        const githubLink = document.querySelector(
          ".navbar__item.navbar__link[href*='github']"
        )
        const githubStat = document.createElement("span")
        githubStat.innerHTML = kFormatter(data.stargazers_count)
        githubStat.className = "github-counter"
        githubLink.appendChild(githubStat)
      })
  }, [])
  return (
    <Layout description={siteConfig.tagline}>
      <div className="home-wrapper">
        <header className={classnames("hero", styles.heroBanner)}>
          <div className="container">
            <div className="hero-inner">
              <img
                src="/img/logo/logo-sm.webp"
                alt="initium logo"
                className={styles.heroLogo}
                height="142"
                width="128"
              />
              <div className={styles.heroText}>
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
              </div>
              <div className={styles.buttons}>
                <Link
                  className={classnames(
                    "button button--outline button--secondary button--lg rounded-pill",
                    styles.button
                  )}
                  to={useBaseUrl("/about")}
                >
                  About
                </Link>

                <Link
                  className={classnames(
                    "button button--primary button--lg rounded-pill",
                    styles.button
                  )}
                  to={useBaseUrl("/getting-started/introduction")}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-wave">
            <div className="hero-wave-inner" />
          </div>
        </header>
        <main className="home-main">
          <section className={`section-features ${styles.features}`}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2 className={styles.featuresTitle}>
                    <span>What is Initium?
                    </span>
                  </h2>
                </div>
              </div>
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2 className="text--center" style={{ fontSize: "2.5rem" }}>
                    Getting started in minutes!
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col col--6">
                  <p className="text--center">[add content/image here]</p>
                </div>
                <div className="col col--6">
                  <p className="text--center">[add content/image here]</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="text--center" style={{ marginTop: "2rem" }}>
                    <Link
                      to="/getting-started/introduction"
                      className="button button--primary button--lg rounded-pill"
                    >
                      Get started
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className={styles.homeSubtitle}>
            <p>Initium is an open source community project.</p>
          </div>
        </main>
      </div>
    </Layout>
  )
}
