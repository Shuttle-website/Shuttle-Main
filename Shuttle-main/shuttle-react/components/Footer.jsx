import React from "react";

export default function Footer() {
	return (
		<div className="container footer">
			<footer className="py-5">
				<div className="row">
					<div className="col-6 col-md-2 mb-3">
						<h5>Company</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									About
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									Features
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									Works
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									Career
								</a>
							</li>
						</ul>
					</div>

					<div className="col-6 col-md-2 mb-3">
						<h5>Help</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									Customer Support
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									Delivery Details
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									Terms & Conditions
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>

					<div className="col-6 col-md-2 mb-3">
						<h5>FAQ</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									Account
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									Manage Deliveries
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									Orders
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									Payments
								</a>
							</li>
						</ul>
					</div>

					<div className="col-md-5 offset-md-1 mb-3">
						<form>
							<h5>Subscribe to our newsletter</h5>
							<p>
								Monthly digest of what's new and exciting from
								us.
							</p>
							<div className="d-flex flex-column flex-sm-row w-100 gap-2">
								<label
									for="newsletter1"
									className="visually-hidden"
								>
									Email address
								</label>
								<input
									id="newsletter1"
									type="text"
									className="form-control"
									placeholder="Email address"
								/>
								<button
									className="btn btn-primary"
									type="button"
								>
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>

				<div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
					<p>© 2022 Company, Inc. All rights reserved.</p>
					<ul className="list-unstyled d-flex">
						<li className="ms-3">
							<a className="link-dark" href="#">
								<svg className="bi" width="24" height="24">
									<use xlinkHref="#twitter"></use>
								</svg>
							</a>
						</li>
						<li className="ms-3">
							<a className="link-dark" href="#">
								<svg className="bi" width="24" height="24">
									<use xlinkHref="#instagram"></use>
								</svg>
							</a>
						</li>
						<li className="ms-3">
							<a className="link-dark" href="#">
								<svg className="bi" width="24" height="24">
									<use xlinkHref="#facebook"></use>
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
}
