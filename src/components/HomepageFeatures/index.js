import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '理论体系',
    Svg: require('@site/static/img/knowledge.svg').default,
    description: (
      <>
        构建机器学习、深度学习、AIGC、流行神经网络模型等人工智能基础理论知识体系。
      </>
    ),
  },
  {
    title: '场景应用',
    Svg: require('@site/static/img/scenarios.svg').default,
    description: (
      <>
        关注 NLP、搜索引擎、推荐系统、CV 等人工智能领域的应用场景与落地实践。
      </>
    ),
  },
  {
    title: '编程语言',
    Svg: require('@site/static/img/programing.svg').default,
    description: (
      <>
        工程落地过程常用编程语言与服务框架。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
