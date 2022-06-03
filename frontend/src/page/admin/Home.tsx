// import React from 'react'
import { useEffect, useState } from 'react'


export const StudentHome = () => {


        const [ allstudents, setAllstudents ] = useState<any>()

        useEffect(() => {

                fetch("http://localhost:7000/api/v1/students")
                .then(res => res.json())
                .then(data => setAllstudents(data.data.students))

        },[setAllstudents])

        console.log(allstudents)
        console.log('allstudents')

        return (
                <div>

                        HOME
                        {allstudents}

                </div>
        )
}

