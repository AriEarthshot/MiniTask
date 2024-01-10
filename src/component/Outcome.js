import React from 'react';
import './Outcome.css';

const Outcome = () => {
	return (
		<container className='c-outcome'>
			<div className='d-out'>
				<h3>{'\u{1F30F}'} BAD OUTCOME #1</h3>
				<h1>900M = malnutrition.</h1>
				<h3>
					Globally, 1 in 3 {'\u{2260}'} safe drinking water, mostly {'\u{2260}'}{' '}
					LDC's
				</h3>
				<div div className='d-out-span'>
					<span className='span1'>{'HIGH...'}</span>
					<span className='span2'>{'HIGH...'}</span>
					<span className='span3'>{'HIGH...'}</span>
				</div>
				<h2>SUMMARY</h2>
				<div>
					<div>
						<div>
							{'\u{1F62E}'} Inaction cost: {'{xx}'}, {'{yy}'}QALY's,{'{zz}'}{' '}
							monetary.
						</div>
						<div>
							{'\u{1F4B0}'} Cost to solve problem now: {'{xx}'} people, {'{yy}'}{' '}
							investment, {'{zz}'} opportunity cost v. others.
						</div>
						<div>
							{'\u{1F4B0}'} Opportunity for innovation: Reduce cost by {'{xx%}'}{' '}
							by fixing {'{1, 2, 3}'}, improving ROI by {'{yy}'}, per $ + hr
							spent.
						</div>
						<div>
							{'\u{1F30E}'} Gap: Technologies & operational risk. High CapEx.
						</div>
					</div>
				</div>
			</div>
		</container>
	);
};

export default Outcome;
