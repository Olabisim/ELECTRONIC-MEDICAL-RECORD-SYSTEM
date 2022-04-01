
// import { Form1 } from "../components/students/Form1"
import { Form2 } from "../components/students/Form2"
import { Form3 } from "../components/students/Form3"
import { Form4 } from "../components/students/Form4"
import { HistoryForm } from "../components/students/HistoryForm"
import { Measurement } from "../components/students/Measurement"


export const Student = () => {
        return (
                <div>
                        STUDENT
                        {/* <Form1 /> */}
                        <Form2 />
                        <Form3 />
                        <Form4 />
                        <HistoryForm />
                        <Measurement />
                </div>
        )
}

