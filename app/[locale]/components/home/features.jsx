import React from 'react'

const Featurs = ({t}) => {
  return (
    <div>

<div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title text-xl font-medium">
   {t('q1')}  </div>
    <div className="collapse-content"> 
      <p> {t('a1')}</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    {t('q2')}
    </div>
    <div className="collapse-content"> 
      <p> {t('a2')}</p>
    </div>
  </div>


  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    {t('q3')}
    </div>
    <div className="collapse-content"> 
      <p> {t('a3')}</p>
    </div>
  </div>

  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    {t('q4')}
    </div>
    <div className="collapse-content"> 
      <p> {t('a4')}</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    {t('q5')}
    </div>
    <div className="collapse-content"> 
      <p> {t('a5')}</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    {t('q6')}
    </div>
    <div className="collapse-content"> 
      <p> {t('a6')}</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    {t('q7')}
    </div>
    <div className="collapse-content"> 
      <p> {t('a7')}</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    {t('q8')}
    </div>
    <div className="collapse-content"> 
      <p> {t('a8')}</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    {t('q9')}
    </div>
    <div className="collapse-content"> 
      <p> {t('a9')}</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    {t('q10')}
    </div>
    <div className="collapse-content"> 
      <p> {t('a10')}</p>
    </div>
  </div>

</div>


    </div>
  )
}

export default Featurs