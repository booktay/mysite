import React, { Fragment } from "react";
import mydata from "@mydata";

class ProfileWork extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			works: "",
		};
	}

	componentDidMount() {
		this.setState({
			works: mydata["profile"]["work"],
		});
	}

	render() {
		var { works } = this.state;
		return (
			<Fragment>
				<div className="content">
					<p className="title has-text-primary is-size-3-tablet is-size-5-mobile">
						Work Experience
					</p>
				</div>
				{works ? (
					works.map((work, index) => (
						<article className="is-white media" key={index}>
							<figure
								className="media-left is-hidden-mobile"
								style={{ color: work["color"] }}
							>
								<span className="icon is-large">
									<i className={work["icon"] + " fa-2x"}></i>
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<p className="is-size-6-tablet is-size-7-mobile">
										<strong
											className="is-capitalized"
											style={{ color: work["color"] }}
										>
											{work["role"]}
										</strong>{" "}
										<small
											className="is-uppercase has-text-weight-bold"
											style={{ color: work["color"] }}
										>
											@{work["name"]}
										</small>{" "}
										<br className="is-hidden-widescreen" />
										<small className="has-text-weight-normal">
											{" "}
											Period {work["year"]}
										</small>
										<br />
										{work["keyword"]}
									</p>
								</div>
								<article className="media">
									<div className="content">
										<p className="has-text-weight-normal is-size-6-tablet is-size-7-mobile">
											{work["team"].split(",")[0]}
											<br className="is-hidden-tablet" />
											{work["team"].split(",")[1]}
										</p>
										<p className="has-text-weight-normal is-size-6-tablet is-size-7-mobile has-text-justified">
											&nbsp;&nbsp;&nbsp;&nbsp;
											{work["impact"]}
										</p>
										<p className="has-text-weight-normal is-size-6-tablet is-size-7-mobile has-text-justified">
											<span
												className="is-capitalized"
												style={{
													textDecoration: "underline",
												}}
											>
												Utilization
											</span>{" "}
											: {work["utilization"]}
										</p>
									</div>
								</article>
							</div>
						</article>
					))
				) : (
					<div className="is-loading">Loading...</div>
				)}
			</Fragment>
		);
	}
}

export default ProfileWork;
