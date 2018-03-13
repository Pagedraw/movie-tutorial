// Generated by https://pagedraw.io/pages/4872
import Star from './multistate_group';
import React from 'react';
import './rating.css';

function render() {
    return <div className="rating-rating-3">
        <div className="rating-0">
            <div className="rating-0-0">
                <div className="rating-0-0-0">
                    <div onClick={() => this.props.setRating(1)} className="rating-multistate_group_instance-3">
                        <Star state={(this.props.rating > 0 ? 'default' : 'state_1')} /> 
                    </div>
                </div>
            </div>
            <div className="rating-0-1">
                <div className="rating-0-1-0">
                    <div onClick={() => this.props.setRating(2)} className="rating-multistate_group_instance-0">
                        <Star state={(this.props.rating > 1 ? 'default' : 'state_1')} /> 
                    </div>
                </div>
            </div>
            <div className="rating-0-2">
                <div className="rating-0-2-0">
                    <div onClick={() => this.props.setRating(3)} className="rating-multistate_group_instance_2">
                        <Star state={(this.props.rating > 2 ? 'default' : 'state_1')} /> 
                    </div>
                </div>
            </div>
            <div className="rating-0-3">
                <div className="rating-0-3-0">
                    <div onClick={() => this.props.setRating(4)} className="rating-multistate_group_instance_3">
                        <Star state={(this.props.rating > 3 ? 'default' : 'state_1')} /> 
                    </div>
                </div>
            </div>
            <div className="rating-0-4">
                <div className="rating-0-4-0">
                    <div onClick={() => this.props.setRating(5)} className="rating-multistate_group_instance-7">
                        <Star state={(this.props.rating > 4 ? 'default' : 'state_1')} /> 
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}