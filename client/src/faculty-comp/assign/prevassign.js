import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import pdf from '../../assets/pdf.png'


const PrevAssign = () => {
    return (
        <> 
            <div className="w-50 h-100 mt-2  border border-top-0 border-start-1 border-bottom-0 border-end-0">
                    <h5  className="ml-5"> Old assignments</h5>
                    <div class="border rounded  border-1 border-info mr-auto ml-auto mt-5 h-75 w-75 bg-light">
                    <h6 className="ml-2"> previous assignments</h6>
                    </div>                
                </div> 
        </>
    )
}
export default PrevAssign