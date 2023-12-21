"use client"
import { Key, useState } from 'react';
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { Form, Input, Checkbox, Select, Switch, FloatButton, message } from 'antd';
import { Delete_img, Edit_img, Close_img } from "@/app/utilities/assets"
import { ButtonOptions, PositionOptions, TopLinksOptions, defaultStepOptions } from "./options"
import Links from "./topNavs"
import "./styles.scss"

const FormComponent: React.FC<{ mode: string }> = (props) => {
    const [formDefault] = Form.useForm();
    const [formTopNav] = Form.useForm();
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
        let updatedSteps;
        if (journeySteps.length > index) {
            updatedSteps = journeySteps.splice(index, 1)
        } else {
            updatedSteps = []
        }
        setJourneySteps(updatedSteps)
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
                        {/* For default configurations for the journey */}
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
                                    {defaultStepOptions.map((stepOptions, index) => {
                                        if (!(props.mode === "journeys" && stepOptions.value === "modalOverlay")) {
                                            return (
                                                <Checkbox value={stepOptions.value} key={index}>
                                                    {stepOptions.label}
                                                </Checkbox>
                                            )
                                        }
                                    })}

                                </Form.Item>
                            </div>
                        </div>
                    </Form>
                    {props.mode === "journeys" ? <Form form={formTopNav} layout='vertical'>
                        <h2>Top Nav configuration</h2>
                        <div className='form_fields_step'>
                            <div className="left_section">
                                <Form.Item label="Select top nav button" name="topNavButton">
                                    <Select placeholder="" options={TopLinksOptions} allowClear />
                                </Form.Item>
                            </div>
                            <div className="left_section">
                                <Form.Item label="Select sub-link" name="subNavButton">
                                    <Select placeholder="" options={TopLinksOptions} allowClear />
                                </Form.Item>
                            </div>
                        </div>
                    </Form> : null
                    }
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
                                    <Checkbox.Group className="checkBox_Group" options={ButtonOptions} />
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
                                        placeholder="The position for modal wrt the element" allowClear
                                        options={PositionOptions}
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
                    <h2>Steps {journeySteps.length}</h2>
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
