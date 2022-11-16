import React from 'react';
import './report.css';
import Navbar from '../../components/nav/Navbar';
// import './report.css';

const Report = () => {
	return (
		<>
			<Navbar />
			<main>
				<div className='report-container'>
					<form id='reportForm'>
						<h2 className='welcome'>Report Form</h2>

						<div className='user-details'>
							<div className='form-box'>
								<label htmlFor='sector' className='report-label'>
									Which sector of the economy do you wish to report?
								</label>
								<br />
								<select name='sector' id='formGroupSector' required>
									<option value='select' selected>
										Select
									</option>
									<option value='finance'>Finance</option>
									<option value='education'>Education</option>
									<option value='sports'>Sports</option>
									<option value='health'>Health</option>
									<option value='energy'>Energy</option>
									<option value='transportation'>Transportation</option>
									<option value='agriculture'>Agriculture</option>
									<option value='oil and gas'>Oil and gas</option>
									<option value='banking'>Banking</option>
									<option value='technology'>Technology&gt;</option>
									<option value='entertainment'>Entertainment</option>
									<option value='others'>Others</option>
								</select>
							</div>

							<div className='form-group agency'>
								<label htmlFor='agency' className='report-label'>
									Kindly select the agency you wish to report to
								</label>
								<br />
								<select name='agency' id='formGroupAgency' required>
									<option value='select' selected>
										Select Agency
									</option>
									<option value='frsc'>Federal Road Safety Corps (FRSC)</option>
									<option value='nps'>Nigeria Prisons Service (NPS)</option>
									<option value='nscdc'>
										Nigeria Security and Civil Defense Corps (NSCDC)
									</option>
									<option value='ndlea'>
										Nigeria Drug Law Enforcement Agency (NDLEA)
									</option>
									<option value='nis'>
										Nigeria Immigrations Service (NIS)
									</option>
									<option value='nc'>Nigeria Customs</option>
									<option value='efcc'>
										Economic and Finance Crime Commissions (EFCC)
									</option>
									<option value='icfc'>
										Independent Corrupt Practices Commission (ICPC)
									</option>
									<option value='others'>Others</option>
								</select>
							</div>

							<div className='form-box'>
								<label htmlFor='report-org' className='report-label'>
									Which company, organization or individual is this about?
								</label>
								<input
									className='form-input'
									type='text'
									id='reportOrg'
									name='reportorg'
								/>
							</div>

							<div className='form-box'>
								<label htmlFor='affiliation' className='report-label'>
									Are you affiliated to the above selected?
								</label>
								<select name='affiliation' id='yesOrNo' required>
									<option value='yes'>Yes</option>
									<option value='no' selected>
										No
									</option>
								</select>
							</div>

							<div className='form-box'>
								<label htmlFor='report-info' className='report-label'>
									What do you want to report?
								</label>
								<textarea
									id='reportInfo'
									name='reportinfo'
									required
									defaultValue={''}
								/>
							</div>

							<div className='form-box'>
								<label htmlFor='upload' className='report-label'>
									Upload document
								</label>
								<input type='file' id='upload' name='upload' required />
								<p>Docx, Image, Audio and Videos</p>
							</div>

							<div className='form-box'>
								<input type='checkbox' id='Affirm' defaultValue='Affirm' />
								<label htmlFor='checkbox'>
									I affirm that the information provided is valid
								</label>
							</div>

							{/* <button class="btn">SUBMIT</button> */}
							<button id='myBtn'>SUBMIT</button>

							{/* The Modal */}
							<div id='myModal' className='modal'>
								{/* Modal content */}
								<div className='modal-content '>
									<span className='close'>×</span>
									<div className='ThanksSAYit'> Thanks for speaking Up! </div>
									<div className='your_Report'>
										{' '}
										Your Report Has been Submitted{' '}
									</div>
									<p className='agentID'>ID: (AGENT CODE -S/N)</p>
									<p className='takeNote'>Please take note of your report ID</p>

									{/* don't forget to link butn back to home */}
									<button className='returnHome'>Home</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</main>
		</>
	);
};
