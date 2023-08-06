import AwsPartner from '@assets/aws-partner.svg'
import bestPlaceToCode from '@assets/best-place-to-code.png'
import EfyEmployers from '@assets/efy-employers.svg'
import greatPlaceToWork from '@assets/great-place-to-work.png'
import styles from './Footer.module.scss'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContainer}>
				<p className={styles.title}>We are coding the world of tomorrow_</p>
				<p className={styles.summary}>
					DaCodes es una de las mejores empresas de desarrollo de software en México y LATAM. Lo que nos separa de los demás
					es el nivel de involucramiento que tenemos en nuestros proyectos y la pasión que tenemos por desarrollar productos
					digitales de calidad mundial. Somos un equipo de 220+ dacoders especializados en la planeación, diseño, desarrollo,
					implementación e innovación continua de productos digitales disruptivos.
				</p>
				<div className={styles.badges}>
					<ul>
						<li>
							<img src={bestPlaceToCode} alt="best place to code" />
						</li>
						<li>
							<img src={greatPlaceToWork} alt="great place to work" />
						</li>
						<li>
							<EfyEmployers />
						</li>
						<li>
							<AwsPartner />
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}
