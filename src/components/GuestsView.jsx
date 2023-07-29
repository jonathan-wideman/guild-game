import React from 'react'
import Guest from './Guest'

const GuestsView = ({ roomedGuests, unroomedGuests }) => {
  return (
    <div className='guest-list flex-column'>
      {unroomedGuests.length > 0 ? (
        <>
          <h3>Unroomed</h3>
          {unroomedGuests.map((guest) => (
            <Guest key={guest.name} guest={guest} />
          ))}
        </>
      ) : null}

      {roomedGuests.length > 0 ? (
        <>
          <h3>Roomed</h3>
          {roomedGuests.map((guest) => (
            <Guest key={guest.name} guest={guest} />
          ))}
        </>
      ) : null}
    </div>
  )
}

export default GuestsView
