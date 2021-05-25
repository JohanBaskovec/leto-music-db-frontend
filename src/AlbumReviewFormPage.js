import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import * as yup from "yup";
import OpenApiSchema from "./openapi-schema.json";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  content: yup.string().required().max(OpenApiSchema.components.schemas.AlbumReview.properties.content.maxLength),
  rating: yup.number().required()
    .min(OpenApiSchema.components.schemas.AlbumReview.properties.rating.minimum)
    .max(OpenApiSchema.components.schemas.AlbumReview.properties.rating.maximum),
});

export function CreateAlbumReviewPage({session, apiService}) {
  return <AlbumReviewForm session={session} apiService={apiService} review={{content: '', rating: 50}} />
}

export function EditAlbumReviewPage({session, apiService}) {
  const {albumReviewId} = useParams();
  const [review, setReview] = useState(null);
  useEffect(() => {
    (async () => {
      const review = await apiService.retrieveAlbumReview(albumReviewId);
      setReview(review);
    })();
  }, [albumReviewId, apiService]);
  if (review == null) {
    return <div>Loading</div>;
  }
  return <AlbumReviewForm session={session} apiService={apiService} review={review} />
}

function AlbumReviewForm({session, apiService, review}) {
  const {register, handleSubmit, formState: {errors, isSubmitted, dirtyFields}} = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: review,
  });
  const onSubmit = async data => {
    try {
      if (review.id != null) {
        const resp = await apiService.updateAlbumReview(review.id, {
          albumReview: data,
        });
      } else {
        // todo
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return <div>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="content">
        <Form.Label>Your review</Form.Label>
        <Form.Control as={'textarea'}
                      isInvalid={errors.content}
                      isValid={!errors.content && dirtyFields.content}
                      {...register('content')} />
        {errors.content &&
        <Form.Control.Feedback type="invalid">
          {errors.content.message}
        </Form.Control.Feedback>
        }
      </Form.Group>
      <Form.Group controlId="rating">
        <Form.Label>Rating</Form.Label>
        <Form.Control type="number"
                      placeholder="Your rating out of 100"
                      isInvalid={errors.rating}
                      isValid={!errors.rating && dirtyFields.rating}
                      {...register('rating')}/>
        {errors.rating &&
        <Form.Control.Feedback type="invalid">
          {errors.rating.message}
        </Form.Control.Feedback>
        }
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>;
}
