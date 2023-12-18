"use client"
import { Key, useState } from 'react';
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { Form, Input, Checkbox, Select, Switch, FloatButton, message } from 'antd';
import { Delete_img, Edit_img, Close_img } from "@/app/utilities/assets"
import "./styles.scss"

const FormComponent: React.FC<{ mode: string }> = (props) => {
    const [formDefault] = Form.useForm();
    const [formStep] = Form.useForm();
    const [journeySteps, setJourneySteps] = useState<any>([])
    const [messageApi, contextHolder] = message.useMessage();

    const journeyFormSubmission = (data: any) => {
        let steps = journeySteps.slice()
        steps = []
        setJourneySteps(steps)
        formStep.resetFields()
        formDefault.resetFields()
        messageApi.open({
            type: 'error',
            content: 'There was an error communicating with the database',
        });

    }

    const stepFormSubmission = (data: any) => {
        const steps = journeySteps.slice()
        steps.push(data)
        setJourneySteps(steps)
        formStep.resetFields()
    }

    const editStep = (data: any) => {
        formStep.setFields(data)
    }

    const removeStep = (index: number) => {
        const updatedSteps = journeySteps.splice(index, 1)
        setJourneySteps(updatedSteps)
        console.log(journeySteps)
    }
    const router = useRouter()
    return (
        <>
            {contextHolder}
            <FloatButton
                icon={<Image
                    src={Close_img}
                    alt={"Close icon"}
                />}
                style={{ right: 24, color: "#ef7c00" }}
                onClick={() => router.push("/journeys")}
            />
            <div className='mainSpace'>
                <div className='formsField'>
                    <Form
                        form={formDefault}
                        layout="vertical"
                        onFinish={journeyFormSubmission}
                    >
                        <h2>{props.mode.toLocaleUpperCase()} Configuration</h2>
                        <div className="form_fields_default">
                            <div className="left_section">
                                <Form.Item label="Journey name" name="journeyName">
                                    <Input placeholder="" required />
                                </Form.Item>
                                <Form.Item label="Custom classes^" name="customClasses">
                                    <Input.TextArea placeholder="Enter classes that you want to add to this journey" name="customClasses" />
                                </Form.Item>
                            </div>
                            <div className="right_section">
                                <Form.Item label="Journey description" name="journeyDescription">
                                    <Input placeholder="" required />
                                </Form.Item>
                                <Form.Item label="Default step options" name="defaultTourOptions">
                                    <Checkbox.Group className="checkBox_Group" name="defaultTourOptions" />
                                    <Checkbox value="arrows">
                                        Arrows
                                    </Checkbox>
                                    <Checkbox value="cancelIcon">
                                        Cancel Icon
                                    </Checkbox>
                                    <Checkbox value="smoothScroll">
                                        Smooth scroll to target
                                    </Checkbox>
                                    <Checkbox value="modalOverlay" defaultChecked>
                                        Modal Overlay
                                    </Checkbox>
                                </Form.Item>
                            </div>
                        </div>
                    </Form>
                    <Form
                        form={formStep}
                        layout="vertical"
                        onFinish={stepFormSubmission}
                    >
                        <h2>Step Configuration<span className="stepIntimation">Editing Step {journeySteps.length + 1}</span></h2>
                        <div className="form_fields_step">
                            <div className="left_section">
                                <Form.Item label="Content" name="journeyContent">
                                    <Input placeholder="Text to be shown inside the step modal" required />
                                </Form.Item>
                                <Form.Item label="Advance on^" name="advancedOn">
                                    <Input.TextArea placeholder="How would the next step be reached?" />
                                </Form.Item>
                                <Form.Item label="Buttons" name='buttonsToShow'>
                                    <Checkbox.Group className="checkBox_Group" options={[
                                        {
                                            value: "next",
                                            label: "Next"
                                        },
                                        {
                                            value: "back",
                                            label: "Back"
                                        },
                                        {
                                            value: "cancel",
                                            label: "Cancel"
                                        },
                                        {
                                            value: "complete",
                                            label: "Complete"
                                        }
                                    ]} />
                                </Form.Item>
                                <Form.Item label="User can click Target" name="targetClick" valuePropName="checked">
                                    <Switch />
                                </Form.Item>
                            </div>
                            <div className="right_section">
                                <Form.Item label="Page Link" name="pageLink">
                                    <Input placeholder="Page VPV or page pathname" required />
                                </Form.Item>
                                <h3>Element</h3>
                                <p>The element to attach the modal to</p>
                                <Form.Item label="Selector" name="elementSelector">
                                    <Input placeholder="JS Path of the element" />
                                </Form.Item>
                                <Form.Item label="Position" name="elementPosition">
                                    <Select
                                        placeholder="The position for modal wrt the element"
                                        options={[
                                            {
                                                value: "left",
                                                label: "Left"
                                            },

                                            {
                                                value: "right",
                                                label: "Right"
                                            },
                                            {
                                                value: "top",
                                                label: "Top"
                                            },

                                            {
                                                value: "bottom",
                                                label: "Bottom"
                                            }
                                        ]}
                                    />
                                </Form.Item>
                            </div>
                        </div>
                        <div className='advancedControls'>
                            <h2>Conditionals^</h2>
                            <p>Advance programmatic controls</p>
                            <div className='control_Options'>
                                <Form.Item label="showOn" name="showOn">
                                    <Input.TextArea placeholder="Conditions to show step" rows={4} />
                                </Form.Item>
                                <Form.Item label="beforeShow" name="beforeShow">
                                    <Input.TextArea placeholder="Conditions before step is shown" rows={4} />
                                </Form.Item>
                                <Form.Item label="beforeHide" name="beforeHide">
                                    <Input.TextArea placeholder="Conditions before step is hidden" rows={4} />
                                </Form.Item>
                            </div>
                        </div>
                    </Form>
                    <div className='actionButtons'>
                        <button className="add_step" onClick={() => formStep.submit()}>
                            Add Step
                        </button>
                        <button className='submit_tour' onClick={() => formDefault.submit()}>
                            Finish Journey
                        </button>
                    </div>
                </div>
                <div className='stepsContainer'>
                    <h2>Steps</h2>
                    {journeySteps.length > 0 ?
                        journeySteps.map((step: any, index: Key) => {
                            return (
                                <div key={index} className="stepIndicatorLabel">
                                    <div className='stepLabel'>
                                        Step {Number(index) + 1}
                                    </div>
                                    <div className='stepActions'>
                                        <Image
                                            src={Edit_img}
                                            alt={"Edit icon"}
                                            width={20}
                                            height={20}
                                        // onClick={() => editStep(step)}
                                        />
                                        <Image
                                            src={Delete_img}
                                            alt={"Delete icon"}
                                            width={20}
                                            height={20}
                                            onClick={() => removeStep(Number(index))}
                                        />
                                    </div>
                                </div>
                            )
                        })
                        : <p>No steps added yet</p>}
                </div>
            </div>
        </>
    )
}

export default FormComponent;
